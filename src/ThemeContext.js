import React, { useReducer , createContext } from 'react'

const dark = {
    name:"dark",
    color:"#fff",
    backgroundColor:"#2d3436",
}
const light = {
    name:"light",
    color:"#3a3a3a",
    backgroundColor:"#fff"
}
const themeReducer = (state,action) => {
    if (action.type=== "DARK") return dark;
    if(action.type === "LIGHT") return light;
}
export const themeContext = createContext()
function ThemeContext(props) {
    const [theme, dispatchTheme] = useReducer(themeReducer, dark)
    return (
        <themeContext.Provider value={[theme, dispatchTheme]}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContext
