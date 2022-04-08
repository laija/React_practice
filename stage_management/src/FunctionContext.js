import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent () {
    const dartkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    
    const themeStyles = {
        backgroundColor: dartkTheme ? '#333' : '#CCC',
        color: dartkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles} >Function Theme</div>
        </>
    )
}