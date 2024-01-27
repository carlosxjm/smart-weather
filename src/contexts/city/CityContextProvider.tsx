import { useState, type ReactNode } from 'react'
import { CityContext, cityContext } from './cityContext'

interface cityContextProviderProps {
  children: ReactNode
}

export const CityContextProvider = ({ children }: cityContextProviderProps) => {
  const [city, setCity] = useState<CityContext['city']>(null)

  const { Provider } = cityContext

  return <Provider value={{ city, setCity }}>{children}</Provider>
}
