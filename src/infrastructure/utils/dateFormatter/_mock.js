const dateNow = new Date();

export const dateMock = {
  object: dateNow,
  iso: dateNow.toISOString(),
  hours: (dateNow.getHours() / 100).toFixed(2).toString().slice(2),
  min: (dateNow.getMinutes() / 100).toFixed(2).toString().slice(2),
  seconds: (dateNow.getSeconds() / 100).toFixed(2).toString().slice(2),
  day:
    dateNow.getDate() < 10
      ? (dateNow.getDate() / 100).toFixed(2).toString().slice(2)
      : dateNow.getDate(),
  month: ((dateNow.getMonth() + 1) / 100).toFixed(2).toString().slice(2),
  year: dateNow.getFullYear(),
};
