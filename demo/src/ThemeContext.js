import React, { useContext, useState } from 'react'

/* Using this state we dont have to worry on how react handles the context internaly */

const StateContext = React.createContext();
const StateUpdateContext = React.createContext();
/*This files is for the context to have it's own hook */


// custom hook for access to the value of the state
export function useStateValue() {
    return useContext(StateContext);
}

// custom hook to update to the value of the state
export function useStateUpdate() {
    return useContext(StateUpdateContext);
}

export function StateProvider({ children }) {
    const [stateValue, setDarckTheme] = useState(false); // creating the state

    function toggleTheme() { // updating our state
        setDarckTheme( preStatevalue => !preStatevalue);
    }

    /*
      here we have 2 components, one is function based and the other is a classe based component, 
      but the will do the exact same thing  

      The provider has a single prop called value, witch will the value of the context
      Everything inside the provider will have access to the value of the context 
    */

    return (
        <StateContext.Provider value={stateValue}>
            <StateUpdateContext.Provider value={toggleTheme}>
                {children}
            </StateUpdateContext.Provider>
        </StateContext.Provider>
    )
}