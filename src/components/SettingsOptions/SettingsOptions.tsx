import { useSettingsContext } from '../../contexts/settings/useSettingsContext'
import './SettingsOptions.css'

export const SettingsOptions = () => {
  const { unitSystem, setUnitSystem } = useSettingsContext()

  return (
    <div
      className="settings-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <h4>Choose your preferred unit system:</h4>
      <label htmlFor="metric">
        <input
          id="metric"
          type="radio"
          name="unit"
          onChange={() => setUnitSystem('Metric')}
          checked={unitSystem === 'Metric'}
        />
        Metric (eg.: Celsius, Kilometer)
      </label>
      <label>
        <input
          type="radio"
          name="unit"
          checked={unitSystem === 'Imperial'}
          onChange={() => setUnitSystem('Imperial')}
        />
        Imperial (eg.: Fahrenheit, Mile)
      </label>
    </div>
  )
}
