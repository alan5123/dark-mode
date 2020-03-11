import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const localStorage = window.localStorage.getItem(key);
        return localStorage ? JSON.parse(localStorage) : initialValue;     
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
return [storedValue, setValue]

}