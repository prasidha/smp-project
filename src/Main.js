import React ,{useContext}from 'react'
import Activities from './Activities'
import Attendance from './Attendance'
import Calendar from './CalendarPage'
import "./Main.css"
import Notice from './Notice'
import {themeContext} from './ThemeContext'

function Main() {
    const [theme] = useContext(themeContext)
    return (
        <div className="main__container"
        style={theme.name === "dark" ? {
            color:'#fff',
            background:"#2D3436",
            boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" 
             
          
        } : {
            color: "#2D3436",
            background: "#fff",
            boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
           
        }}
          >
              <div className="attendance__div"><Attendance/></div>
               <div className="notice__div"><Notice/></div>
               <div className="activities__div"><Activities/></div>
               <div className="calendar__div"><Calendar/></div>
        </div>
    )
}
export default Main
