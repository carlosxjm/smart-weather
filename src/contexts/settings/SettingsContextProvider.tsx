import { useState, type ReactNode, useEffect } from 'react'
import { SettingsContext, settingsContext } from './settingsContext'
import { SETTINGS_LOCALSTORAGE_KEY } from '../../constants'

interface SettingsContextProviderProps {
  children: ReactNode
}

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderProps) => {
  const storedUnitSystem: SettingsContext['unitSystem'] =
    localStorage.getItem(SETTINGS_LOCALSTORAGE_KEY) === 'Imperial'
      ? 'Imperial'
      : 'Metric'

  const [unitSystem, setUnitSystem] =
    useState<SettingsContext['unitSystem']>(storedUnitSystem)

  useEffect(() => {
    localStorage.setItem(SETTINGS_LOCALSTORAGE_KEY, unitSystem)
  }, [unitSystem])

  const { Provider } = settingsContext

  return <Provider value={{ unitSystem, setUnitSystem }}>{children}</Provider>
}
