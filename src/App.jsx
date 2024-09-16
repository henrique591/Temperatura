import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "75e4eb22a97a9cf401d55f583712f0e1"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric
    `

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

    

  }

  return (
    <>
     <h1>Previsão do Tempo</h1>
     <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
     <button onClick={searchCity}>Buscar</button>

     <WeatherInformations
      weather={weather}
     />

     
    </>
  )
}

export default App
