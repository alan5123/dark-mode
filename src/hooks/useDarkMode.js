import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react'

export default function useDarkMode(key, initialValue){
    const [value, setValue] =useLocalStorage(key,initialValue)
    useEffect(() => {
        if (value === true){
            document.querySelector('body').classList.add('dark-mode')
        }else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [value])
    return [value,setValue]
}
    

