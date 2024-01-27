import { useContext } from 'react'
import { settingsContext } from './settingsContext'

export const useSettingsContext = () => useContext(settingsContext)
