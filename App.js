import React from 'react'
import { ThemeProvider } from './src/contexts/ThemeContext'
import FirstComponent from './src/components/FirstComponent'

const App = () => {
  return (
    <ThemeProvider>
      <FirstComponent />
    </ThemeProvider>
  )
}

export default App