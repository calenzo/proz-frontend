// import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { Home } from "..";

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

describe("Page Home", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "home",
    };

    renderCustom(<Home />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("renders title correctly", () => {
    const mock = {
      title: "Inicio",
    };

    renderCustom(<Home />);

    expect(screen.getByText(mock.title)).toBeInTheDocument();
  });

  test("renders describe message", () => {
    const mock = {
      describe: "Criado por Carlos Henrique Calenzo",
    };

    renderCustom(<Home />);

    expect(screen.getByText(mock.describe)).toBeInTheDocument();
  });
});
