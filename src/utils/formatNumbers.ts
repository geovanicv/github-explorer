import numeral from 'numeral';

export const formatNumbers = (value: number) =>
  value < 1000 ? value : `${numeral(value).format("0.0a")}`;