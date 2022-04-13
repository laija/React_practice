import React from 'react'
import { useStateValue, useStateUpdate } from './ThemeContext'

export default function ContextComponent () {
    const dartkTheme = useStateValue();
    const toggleTheme = useStateUpdate();

    const themeStyles = {
        backgroundColor: dartkTheme ? '#333' : '#CCC',
        color: dartkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    
    return (
        <>
            <div style={themeStyles}> function Theme</div>
        </>
    )
}
