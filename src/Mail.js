import React ,{useContext} from 'react'
import './Mail.css'
import {themeContext} from "./ThemeContext"

function Mail() {
    const [theme] = useContext(themeContext)
    return (
        <div className="mail__container"
        style={theme.name === "dark" ? {
            color:'#fff',
            background:"#2D3436",
            boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" ,
            borderTop:"5px solid white",
        } : {
            color: "#2D3436",
            background: "#fff",
            boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
            borderTop: "5px solid #2D3436"
        }}
        
        >
            <div className="application">
             <h4>Subject</h4>
            <input type="text" className="input" placeholder="application for sick leave"/>
            
            </div>

            <div className="description">
            <h4>Description</h4>
            <input type="text" className="input2"/>
            </div>
        
        
           
          
        </div>
    )
}

export default Mail
