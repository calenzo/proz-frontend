import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { Header } from "..";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
    patch: jest.fn(() => Promise.resolve()),
    delete: jest.fn(() => Promise.resolve()),
  })),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => () => {},
}));

describe("Component Header", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "header",
    };
    renderCustom(<Header />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });
});
