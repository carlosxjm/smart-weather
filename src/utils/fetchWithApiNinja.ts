import { APININJA_API_URL, APININJA_KEY } from '../constants'

export const fetchWithApiNinja = (
  path: string,
  queryParams: Record<string, string> = {},
) =>
  fetch(
    `${APININJA_API_URL}/${path}?${new URLSearchParams({
      ...queryParams,
    })}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': APININJA_KEY,
      },
    },
  )
