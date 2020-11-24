import React ,{useContext}from 'react'
import {themeContext} from "./ThemeContext"
import './Attendance.css'


function Attendance() {
    const [theme] = useContext(themeContext)
    return (
        <div className="attendance__container">
            <div className="total__days"
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
                     <h4>total school days</h4>
                     <h1>289 days</h1>
                
            </div>

            <div className="present__days"
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
                     <h4>total present days</h4>
                     <h1>270 days</h1>
            </div>
        </div>
    )
}

export default Attendance
