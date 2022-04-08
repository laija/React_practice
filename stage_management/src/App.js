import React from 'react'
import ContextComponent from './FunctionContext';
import { ThemeProvider } from './ThemeContext';

export default function App () {
  // ThemeProvider is the one wrapping all the logic for handling and updating our state
  return (
    <>
      <ThemeProvider>
        <ContextComponent/> 
      </ThemeProvider>
    </>
  )
}
