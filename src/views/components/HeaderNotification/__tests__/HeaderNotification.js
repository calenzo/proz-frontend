import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderCustom } from "../../../../infrastructure/utils";

import { HeaderNotification } from "..";

describe("Component HeaderNotification", () => {
  test("should can rendered", () => {
    const mock = {
      testId: "header-notification",
      title: "title",
      createdAt: new Date().toISOString(),
      handleOpenExcludeNotification: jest.fn(),
    };

    renderCustom(<HeaderNotification {...mock} />);

    expect(screen.getByTestId(mock.testId)).toBeInTheDocument();
  });

  test("should can exclude the notification", () => {
    const mock = {
      testId: "header-notification-exclude",
      title: "title",
      createdAt: new Date().toISOString(),
      handleOpenExcludeNotification: jest.fn(),
    };

    renderCustom(<HeaderNotification {...mock} />);

    userEvent.click(screen.getByTestId(mock.testId));

    expect(mock.handleOpenExcludeNotification).toHaveBeenCalledTimes(1);
  });

  test("should can't exclude the notification", () => {
    const mock = {
      testId: "header-notification-exclude",
      title: "title",
      createdAt: new Date().toISOString(),
      handleOpenExcludeNotification: jest.fn(),
    };

    renderCustom(
      <HeaderNotification title={mock.title} createdAt={mock.createdAt} />
    );

    expect(screen.queryByTestId(mock.testId)).toBeNull();
  });
});
