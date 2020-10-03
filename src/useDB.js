import {useState} from 'react'

function useDB(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage(key)

    try {
      const existingValue = JSON.parse(item)  // if item exists, use it
      
      if (existingValue) {
        return existingValue
      } else {
        window.localStorage(key, JSON.stringify(defaultValue)) // if it's non-existent, setup and return the value
        return defaultValue
      }
    } catch (error) {
      window.localStorage(key, JSON.stringify(defaultValue))	// on error we cleanup the value
      return defaultValue      
    }
  })

  const setValue = value => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;	// mimic useState API
      setStoredValue(newValue);
      window.localStorage(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValue]
}

export default useDB