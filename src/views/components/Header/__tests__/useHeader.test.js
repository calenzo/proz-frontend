import { useHeader } from "../useHeader";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
    get: jest.fn(() => Promise.resolve()),
  })),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("react", () => ({
  useState: (state) => [state, (newState) => newState],
  useEffect: () => {},
}));

describe("Component Header", () => {
  test("should can redirect to home", () => {
    const { handleLogo } = useHeader();

    handleLogo();

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
