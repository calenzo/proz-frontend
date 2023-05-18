import { format, parseISO } from "date-fns";

export const dateFormatter = (value, pattern = "dd/MM/yyyy", options = {}) => {
  if (!value) {
    return "";
  }

  if (toString.call(value) === "[object Date]") {
    value = value.toISOString();
  }

  const dateFormated = format(parseISO(value), pattern, options);

  return dateFormated;
};
