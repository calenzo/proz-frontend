import React from "react";

import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { Notifications } from "..";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
    get: jest.fn(async () => await Promise.resolve()),
  })),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => () => {},
  useLocation: () => () => {},
}));

describe("Page Notifications", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "notifications",
    };

    renderCustom(<Notifications />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("renders title correctly", () => {
    const mock = {
      title: "Notificações",
    };

    renderCustom(<Notifications />);

    expect(screen.getByText(mock.title)).toBeInTheDocument();
  });

  test("renders alarm message when there are no notifications", () => {
    const mock = {
      alarmeMessage: "Você não possui notificações recentes.",
    };

    renderCustom(<Notifications />);

    expect(screen.getByText(mock.alarmeMessage)).toBeInTheDocument();
  });

  test("renders notifications and list of notifications when there are notifications)", () => {
    const mockNotifications = [
      {
        entityId: 1,
        title: "Notification 1",
      },
      {
        entityId: 2,
        title: "Notification 2",
      },
    ];

    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [mockNotifications, jest.fn()]);

    renderCustom(<Notifications />);

    const notificationElements = screen.getAllByText((content, element) => {
      return (
        content.includes("Notification") &&
        element.tagName.toLowerCase() === "p"
      );
    });

    expect(notificationElements.length).toBe(mockNotifications.length * 2);
  });
});
