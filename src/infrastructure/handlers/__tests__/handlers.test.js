const { convertNotificationToUse } = require("../notification");

describe("Infrastructure Handlers", () => {
  test("should convert all values", () => {
    const mockNotificationBackend = {
      title: "Algum comunicado 9",
      is_read: false,
      entity_id: 6,
      created_at: "2023-05-18T00:19:26.301112",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      is_active: true,
    };

    const valuesFormatted = convertNotificationToUse(mockNotificationBackend);

    const keysFormatted = Object.keys(valuesFormatted);

    expect(keysFormatted.includes("title")).toBeTruthy();
    expect(keysFormatted.includes("isRead")).toBeTruthy();
    expect(keysFormatted.includes("entityId")).toBeTruthy();
    expect(keysFormatted.includes("createdAt")).toBeTruthy();
    expect(keysFormatted.includes("describe")).toBeTruthy();
    expect(keysFormatted.includes("isActive")).toBeTruthy();
  });
});
