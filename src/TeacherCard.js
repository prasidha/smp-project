import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import {Typography} from '@material-ui/core'
import './TeachersCard.css'
import {themeContext} from './ThemeContext'


function TeacherCard(props) {
    const [theme] = useContext(themeContext)

    return (
        <Card className="teacher__card"
        style={theme.name === "dark" ? {
            color:'#fff',
            background:"#2D3436",
        } : {
            color: "#2D3436",
            background: "#fff",
        }}
        >
            <div>
                <Typography variant="h1" component="h2">{props.title}</Typography>
            </div>

            <div className="text">
               <h4>{props.name},science-2</h4>
               <h5 style={{ marginTop:"-1rem"}}>{props.gmail}</h5>
               <p style={{ marginTop:"-1rem"}}>{props.phn}</p>
            
            </div>
    
        </Card>
    )
}

export default TeacherCard
