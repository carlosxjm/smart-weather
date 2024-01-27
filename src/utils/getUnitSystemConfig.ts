import { SettingsContext } from '../contexts/settings/settingsContext'

interface getUnitSystemConfigReturnType {
  tempUnit: 'C' | 'F'
  tempKey: 'temp_c' | 'temp_f'
  velocityUnit: 'kph' | 'mph'
  velocityKey: 'wind_kph' | 'wind_mph'
}

export const getUnitSystemConfig = (
  unitSystem: SettingsContext['unitSystem'],
): getUnitSystemConfigReturnType => {
  if (unitSystem === 'Metric') {
    return {
      tempUnit: 'C',
      tempKey: 'temp_c',
      velocityUnit: 'kph',
      velocityKey: 'wind_kph',
    }
  }

  return {
    tempUnit: 'F',
    tempKey: 'temp_f',
    velocityUnit: 'mph',
    velocityKey: 'wind_mph',
  }
}
