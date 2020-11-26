import React ,{useContext}from 'react'
import TeacherCard from './TeacherCard'
import './Teachers.css'
import {Grid} from '@material-ui/core'
import {themeContext} from './ThemeContext'

function Teachers() {
  const [theme] = useContext(themeContext)
    return (
        <div className="Teachers__info" 
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
          
        <Grid 
        container
        spacing={2} 
        className="grid"
        >
        <Grid 
        item xs={12} sm ={4}
        >
           <TeacherCard title ="P" name="prasidha Acharya" gmail="pracedha@gmail.com" phn="9801223455"/>
        </Grid>

        <Grid 
        item xs={12} sm ={4}
        >
          <TeacherCard title ="J" name="Jyoti bista" gmail="jyotibista@gmail.com" phn="9801223455"/>
        </Grid>

        <Grid 
        item xs={12} sm ={4}
        >
          <TeacherCard title="D" name="Daniel Magar" gmail="danielmagar@gmail.com" phn="9801223445"/>
        </Grid>


        <Grid 
        item xs={12} sm ={4}
        >
          <TeacherCard title="A" name="Amrit Pradhan" gmail="amritpradhan@gmail.com" phn="9801223455"/>
        </Grid>


        <Grid 
        item xs={12} sm ={4}
        >
          <TeacherCard title="P" name="prasidha Acharya" gmail="pracedha@gmail.com" phn="9801223455"/>
        </Grid>

        <Grid 
        item xs={12} sm ={4}
        >
          <TeacherCard title="P" name="Pragya Acharya" gmail="pragya13@gmail.com" phn="9801223455"/>
        </Grid>
        
        </Grid>
       
           
        </div>
    )
}

export default Teachers
