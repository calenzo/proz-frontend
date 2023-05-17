import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { StructurePage } from "..";

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

describe("Component StructurePage", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "structure-page",
      content: "Children",
    };

    renderCustom(<StructurePage {...mock}>{mock.content}</StructurePage>);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });
});
