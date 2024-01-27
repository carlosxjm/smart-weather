import { CityContextProvider } from './contexts/city/CityContextProvider'
import { SettingsContextProvider } from './contexts/settings/SettingsContextProvider'
import { Home } from './pages/Home/Home'

export const App = () => (
  <SettingsContextProvider>
    <CityContextProvider>
      <Home />
    </CityContextProvider>
  </SettingsContextProvider>
)
