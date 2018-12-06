export const toCelsius = kelvins =>
  Math.round(kelvins - 273.15)

export const toFahrenheit = kelvins =>
  Math.round(toCelsius(kelvins) * 9/5 + 32)