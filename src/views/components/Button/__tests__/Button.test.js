import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";
// import { Theme } from "views/styles/themes/defaultTheme";

import { Button } from "..";

describe("Component Button", () => {
  test("should can click", () => {
    const mock = {
      text: "Text",
      testId: "button",
      onClick: jest.fn(),
      disabled: false,
    };
    renderCustom(
      <Button onClick={mock.onClick} disabled={mock.disabled}>
        {mock.text}
      </Button>
    );
    const element = screen.getByTestId(mock.testId);

    userEvent.click(element);

    expect(mock.onClick).toHaveBeenCalled();
  });

  test("should can't click", () => {
    const mock = {
      text: "Text",
      testId: "button",
      onClick: jest.fn(),
      disabled: true,
    };
    renderCustom(
      <Button onClick={mock.onClick} disabled={mock.disabled}>
        {mock.text}
      </Button>
    );
    const element = screen.getByTestId(mock.testId);

    userEvent.click(element);

    expect(mock.onClick).not.toHaveBeenCalled();
  });

  // test("Should render the with variant outline", () => {
  //   const mock = {
  //     text: "Text",
  //     testId: "button",
  //     variant: "outline",
  //   };
  //   renderCustom(<Button variant={mock.variant}>{mock.text}</Button>);

  //   // const { color } = getComputedStyle(screen.getByText(mock.text));

  //   // expect(color).toHaveStyle(Theme.colors.purple_1);

  //   // expect(screen.getByTestId(mock.testId)).toHaveStyle({
  //   //   color: Theme.colors.purple_1,
  //   // });
  //   // expect(screen.getByTestId(mock.testId)).toHaveStyle({
  //   //   borderRadius: "4px",
  //   // });
  // });
});
