import { dateFormatter } from "..";

import { dateMock } from "../_mock";

const resultFormatter = {
  default: `${dateMock.day}/${dateMock.month}/${dateMock.year}`,
  withLessPattern: `${dateMock.day}-${dateMock.month}-${dateMock.year}`,
};

describe("Date formatter", () => {
  test("should to return empty string when try to formatter with null value.", () => {
    expect(dateFormatter()).toEqual("");
  });

  test("should to return error when try to formatter a string value.", () => {
    expect(() => dateFormatter("Proz Educação")).toThrowError(
      "Invalid time value"
    );
  });

  test("should to return error when try to formatter a invalid date value.", () => {
    expect(() => dateFormatter("2021-03-32")).toThrowError(
      "Invalid time value"
    );
  });

  test("should to formatter date iso with pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter(dateMock.iso);

    expect(formatedValue).toEqual(resultFormatter.default);
  });

  test("should to formatter string valid date to pattern dd-MMMM-YYYY (with less caracter),", () => {
    const formatedValue = dateFormatter(dateMock.iso, "dd-MM-yyyy");

    expect(formatedValue).toEqual(resultFormatter.withLessPattern);
  });

  test("should to formatter string valid date to pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter("2023-05-17");

    expect(formatedValue).toEqual("17/05/2023");
  });

  test("should to formatter object date valid date to pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter(dateMock.object);

    expect(formatedValue).toEqual(resultFormatter.default);
  });
});
