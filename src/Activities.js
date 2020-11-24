import React ,{useContext} from 'react'
import {themeContext} from './ThemeContext'
import './Activities.css'


function Activities() {
    const [theme] = useContext(themeContext);

    const RecentActivity = [
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },
        {
            activity: 'You sent an application for sick leave.'
        },

        {
            activity: 'You sent an application for sick leave.'
        },
       
    ]

    
    let activities = RecentActivity.map((item, index) => (
    <p key={index}>
    <li  className="activity">
      {item.activity}
    </li>
    </p>
  ))

    return (
        <div className="recent_activities"
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
            <h3>Recent Activities</h3>
            {activities}
          </div>
    )
}
export default Activities
