import { createContext } from 'react'

export interface SettingsContext {
  unitSystem: 'Metric' | 'Imperial'
  setUnitSystem: (unitSystem: SettingsContext['unitSystem']) => void
}

export const settingsContext = createContext<SettingsContext>({
  unitSystem: 'Imperial',
  setUnitSystem: () => {},
})
