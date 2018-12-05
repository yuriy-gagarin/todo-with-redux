export const toCelsius = kelvins =>
  kelvins - 273.15

export const toFahrenheit = kelvins =>
  toCelsius(kelvins) * 9/5 + 32