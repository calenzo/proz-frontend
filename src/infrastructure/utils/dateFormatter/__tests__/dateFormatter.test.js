import { dateFormatter } from "..";

import { dateMock } from "../_mock";

const resultFormatter = {
  default: `${dateMock.day}/${dateMock.month}/${dateMock.year}`,
  withLessPattern: `${dateMock.day}-${dateMock.month}-${dateMock.year}`,
};

describe("Date formatter", () => {
  it("should to return empty string when try to formatter with null value.", () => {
    expect(dateFormatter()).toEqual("");
  });

  it("should to return error when try to formatter a string value.", () => {
    expect(() => dateFormatter("Proz Educação")).toThrowError(
      "Invalid time value"
    );
  });

  it("should to return error when try to formatter a invalid date value.", () => {
    expect(() => dateFormatter("2021-03-32")).toThrowError(
      "Invalid time value"
    );
  });

  it("should to formatter date iso with pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter(dateMock.iso);

    expect(formatedValue).toEqual(resultFormatter.default);
  });

  it("should to formatter string valid date to pattern dd-MMMM-YYYY (with less caracter),", () => {
    const formatedValue = dateFormatter(dateMock.iso, "dd-MM-yyyy");

    expect(formatedValue).toEqual(resultFormatter.withLessPattern);
  });

  it("should to formatter string valid date to pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter("2023-05-17");

    expect(formatedValue).toEqual("17/05/2023");
  });

  it("should to formatter object date valid date to pattern dd/MMMM/YYYY.", () => {
    const formatedValue = dateFormatter(dateMock.object);

    expect(formatedValue).toEqual(resultFormatter.default);
  });
});
