import { WEATHERAPI_API_URL, WEATHERAPI_KEY } from '../constants'

export const getWeatherApiURL = (
  path: string,
  queryParams: Record<string, string> = {},
) =>
  `${WEATHERAPI_API_URL}/${path}.json?${new URLSearchParams({
    key: WEATHERAPI_KEY,
    ...queryParams,
  })}`
