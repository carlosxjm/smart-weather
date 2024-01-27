import { createContext } from 'react'

export interface CityContext {
  city: { value: string; label: string } | null
  setCity: (city: CityContext['city']) => void
}

export const cityContext = createContext<CityContext>({
  city: null,
  setCity: () => {},
})
