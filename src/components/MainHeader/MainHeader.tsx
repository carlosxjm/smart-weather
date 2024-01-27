import { MouseEventHandler, useEffect, useState } from 'react'
import './MainHeader.css'
import { SettingsOptions } from '../SettingsOptions/SettingsOptions'
import { CitySelect } from '../CitySelect/CitySelect'

export const MainHeader = () => {
  const [showSettings, setShowSetting] = useState(false)

  const handleToggleSettings: MouseEventHandler = (event) => {
    event.stopPropagation()
    setShowSetting(!showSettings)
  }

  useEffect(() => {
    const handleClickOut = () => {
      if (showSettings) {
        setShowSetting(false)
      }
    }

    document.addEventListener('click', handleClickOut)

    return () => document.removeEventListener('click', handleClickOut)
  }, [showSettings])

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="SmartWeather" className="logo" />
          </div>
          <div className="search-wrapper">
            <CitySelect />
          </div>
          <div className="button-wrapper">
            <button onClick={handleToggleSettings} aria-label="Toggle Settings">
              <img src="/engine.svg" alt="Settings Icon" />
            </button>
            {showSettings && <SettingsOptions />}
          </div>
        </div>
      </header>
      <img
        src="/degrade-border.svg"
        aria-hidden="true"
        className="header-border"
      />
    </>
  )
}
