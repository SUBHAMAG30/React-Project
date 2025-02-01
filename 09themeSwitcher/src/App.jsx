import React, { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  } 

  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

      <div className="w-[100vw] flex flex-wrap min-h-screen items-center">
        <div className="w-[100vw]">
          <div className="w-[100vw] max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-[100vw] max-w-sm mx-auto">
            <Card />

          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
