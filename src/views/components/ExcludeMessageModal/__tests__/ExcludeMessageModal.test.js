import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { ExcludeMessageModal } from "..";
import { act } from "react-dom/test-utils";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: { use: () => {} },
    },
    patch: jest.fn(() => Promise.resolve()),
    delete: jest.fn(() => Promise.resolve()),
  })),
}));

describe("Component ExcludeMessageModal", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "exclude-message-modal",
    };

    renderCustom(<ExcludeMessageModal onClose={mock.onClick} />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("should can't rendered", () => {
    const mock = {
      testId: "exclude-message-modal",
      isOpen: false,
    };

    renderCustom(
      <ExcludeMessageModal onClose={mock.onClick} isOpen={mock.isOpen} />
    );

    expect(screen.queryByTestId(mock.testId)).toBeNull();
  });

  test("should can close the modal", () => {
    const mock = {
      text: "NÃO",
      onClose: jest.fn(),
    };

    renderCustom(<ExcludeMessageModal onClose={mock.onClose} />);

    userEvent.click(screen.getByText(mock.text));

    expect(mock.onClose).toHaveBeenCalledTimes(1);
  });

  test("should can submit the modal", async () => {
    const mock = {
      text: "SIM",
      onClose: jest.fn(),
      callbackSuccess: jest.fn(),
    };

    renderCustom(
      <ExcludeMessageModal
        onClose={mock.onClose}
        callbackSuccess={mock.callbackSuccess}
      />
    );

    userEvent.click(screen.getByText(mock.text));

    await act(async () => {
      await Promise.resolve();
    });

    expect(mock.onClose).toHaveBeenCalledTimes(1);
    expect(mock.callbackSuccess).toHaveBeenCalledTimes(1);
  });
});
