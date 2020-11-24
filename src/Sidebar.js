import { IconButton } from '@material-ui/core'
import React ,{useContext} from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import {Link} from 'react-router-dom'
import {themeContext} from "./ThemeContext"

function Sidebar() {
  const [theme] = useContext(themeContext);
    return (
        <div className="sidebar__container" 
        style={theme.name === "dark" ? {
          color:'#fff',
          background:"#2D3436",
          boxShadow: "0px 12px 18px rgba(1, 1, 1, 0.5)" ,  
      } : {
          color: "#2D3436",
          background: "#fff",
          boxShadow: "0px 15px 30px rgba(181, 173, 243, 0.5)",
      }}
        >
              <div className="home__icon"
              
              >
              <Link to="/home">
              <IconButton
              style={theme.name === "dark" ? {
                color:'#fff',
                
            } : {
                color: "#2D3436",
            
            }}
              
              >
       <HomeIcon/>  
         
              </IconButton>
              </Link>  
              </div>


               <div className="email__icon">
               <Link to ="/application">
               <IconButton
               style={theme.name === "dark" ? {
                color:'#fff',
                
            } : {
                color: "#2D3436",
            
            }}
               >
               
              <EmailIcon/>
               </IconButton>
               </Link>
               </div>

               <div className="asg__icon">
                  <IconButton
                  style={theme.name === "dark" ? {
                    color:'#fff',
                    
                } : {
                    color: "#2D3436",
                
                }}
                  ><AssignmentIcon/>
                  </IconButton>
               </div>

               <div className="num__icon">
               <IconButton
               style={theme.name === "dark" ? {
                color:'#fff',
                
            } : {
                color: "#2D3436",
            
            }}
               >
               <FormatListNumberedIcon/>
               </IconButton>
               </div>

               <div className="people__icon">
               <IconButton
               style={theme.name === "dark" ? {
                color:'#fff',
                
            } : {
                color: "#2D3436",
            
            }}
               ><PeopleIcon/>
               </IconButton>
               </div>
          
            <div className="settting__icon">
              
           <IconButton
           style={theme.name === "dark" ? {
            color:'#fff',
            
        } : {
            color: "#2D3436",
        
        }}
           ><SettingsApplicationsIcon/>
           </IconButton>
            </div>

           <div className="assignment__complete">
             <IconButton
             style={theme.name === "dark" ? {
              color:'#fff',
              
          } : {
              color: "#2D3436",
          
          }}
             ><AssignmentTurnedInIcon/>
             </IconButton> 
           </div>
           
        </div>
       
    )
}

export default Sidebar
