import ReactSelect from 'react-select/async'
import { fetchWithApiNinja } from '../../utils/fetchWithApiNinja'
import { useCityContext } from '../../contexts/city/useCityContext'

interface CityItem {
  name: string
  country: string
  latitude: number
  longitude: number
}

interface Option {
  value: string
  label: string
}

export const CitySelect = () => {
  const { city, setCity } = useCityContext()

  const loadOptions = (
    inputValue: string,
    callback: (options: { value: string; label: string }[]) => void,
  ) => {
    fetchWithApiNinja('city', { limit: '5', name: inputValue })
      .then((response) => response.json())
      .then((result) => {
        callback(
          result.map((item: CityItem) => ({
            value: `${item.name}`,
            label: `${item.name}, ${item.country}`,
          })),
        )
      })
  }

  const handleSelectChange = (option: Option | null) => {
    if (option) {
      setCity(option)
    }
  }

  return (
    <div style={{ width: '300px' }}>
      <ReactSelect
        placeholder="Select a city..."
        cacheOptions
        loadOptions={loadOptions}
        onChange={handleSelectChange}
        value={city}
      />
    </div>
  )
}
