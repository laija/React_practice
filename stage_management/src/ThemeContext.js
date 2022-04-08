import React, { useContext, useState } from 'react'

/* Using this state we dont have to worry on how react handles the context internaly */

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
/*This files is for the context to have it's own hook */


// custom hook for access to the value of the state
export function useTheme() {
    return useContext(ThemeContext);
}

// custom hook to update to the value of the state
export function useThemeUpdate() {
    //return useContext(ThemeUpdateContext);
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarckTheme] = useState(true); // creating the state

    function toggleTheme() { // updating our state
        setDarckTheme( prevDarkTheme => !prevDarkTheme);
    }

    /*
      here we have 2 components, one is function based and the other is a classe based component, 
      but the will do the exact same thing  

      The provider has a single prop called value, witch will the value of the context
      Everything inside the provider will have access to the value of the context 
    */

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContext.Provider value={toggleTheme}>
                es igual = {darkTheme}
                {children}
            </ThemeContext.Provider>
        </ThemeContext.Provider>
    )
}