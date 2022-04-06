const date = new Date();

export const unixToDate = (unixTime) => {
  const date = new Date(unixTime).toDateString();
  return date;
};
const getDay = (day = date.getDate()) => {
  if (day < 10) {
    return `0${day}`;
  }
  return date.getDate();
};
const getMonth = (month = date.getMonth()) => {
  if (month < 10) {
    return `0${month + 1}`;
  }
};
const getYear = date.getFullYear();
const getLastMonth = (month = date.getMonth(), year = date.getFullYear()) => {
  if (month === 0) {
    return `${year - 1}-11`;
  }
  return `${year}-${month}`;
};

const currentDate = `${getYear}-${getMonth()}-${getDay()}`;
const previousMonthDate = `${getLastMonth()}-${getDay()}`;

export const API_URL = `https://data.messari.io/api/v1/assets/bitcoin/metrics/price/time-series?start=${previousMonthDate}&end=${currentDate}&interval=1d`;
