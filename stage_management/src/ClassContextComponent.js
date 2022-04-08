import React , { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {

        /*Here we consume the ThemeContext from the App.js component and use it as darkTheme to determine what we use as*/
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style ={this.themeStyles(darkTheme)}>
                        Class Theme
                    </div>
                }}
            </ThemeContext.Consumer>
        )
    }
}