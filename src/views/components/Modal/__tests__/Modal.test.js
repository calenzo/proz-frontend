import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { Modal } from "..";

describe("Component Modal", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "modal",
      content: "Children",
    };

    renderCustom(<Modal {...mock}>{mock.content}</Modal>);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("should can't rendered", () => {
    const mock = {
      testId: "modal",
      content: "Children",
      isOpen: false,
    };

    renderCustom(<Modal {...mock}>{mock.content}</Modal>);

    expect(screen.queryByTestId(mock.testId)).toBeNull();
  });

  test("should can close the modal", () => {
    const mock = {
      testId: "modal",
      content: "Children",
      isOpen: true,
      onClose: jest.fn(),
    };

    renderCustom(<Modal {...mock}>{mock.content}</Modal>);

    userEvent.click(screen.getByTestId(mock.testId));

    expect(mock.onClose).toHaveBeenCalledTimes(1);
  });
});
