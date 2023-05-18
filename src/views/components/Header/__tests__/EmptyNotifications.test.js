import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { EmptyNotifications } from "../components";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
  })),
}));

describe("Component EmptyNotifications", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "empty-notifications",
    };
    renderCustom(<EmptyNotifications />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });
});
