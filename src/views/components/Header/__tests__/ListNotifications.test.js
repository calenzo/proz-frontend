import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { ListNotifications } from "../components";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
  })),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    location: {
      pathname: "/notifications",
    },
  }),
}));

describe("Component ListNotifications", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "list-notifications",
      onClose: jest.fn(),
    };
    renderCustom(<ListNotifications onClose={mock.onClose} />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("should can close the list of notifications", () => {
    const mock = {
      testId: "list-notifications",
      onClose: jest.fn(),
    };
    renderCustom(<ListNotifications onClose={mock.onClose} />);

    userEvent.click(screen.getByTestId(mock.testId));

    expect(mock.onClose).toHaveBeenCalledTimes(1);
  });

  test("should can redirect to page of notifications", () => {
    const mock = {
      text: "VER TODAS",
      notifications: [{ title: "title", createdAt: new Date().toISOString() }],
    };
    renderCustom(<ListNotifications notifications={mock.notifications} />);

    userEvent.click(screen.getByText(mock.text));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
