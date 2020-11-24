import React ,{useContext} from 'react'
import './Statusbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import {IconButton, Switch} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { Notifications } from '@material-ui/icons'
import {themeContext} from './ThemeContext'

function Statusbar({logout}) {
  const [theme , dispatchTheme] = useContext(themeContext)
  

  const handleSwitch = () => {
    if(theme.name === "dark"){
       dispatchTheme({type:"LIGHT"})
    }
    else if (theme.name === "light"){
      dispatchTheme({type:"DARK"})
    }
}

    return (
      <div className="statusbar__container" 
      style ={
        theme.name === "dark" ?
        {
           backgroundColor:"#2d3436"
        }:
        {
            backgroundColor:"white"
        }
    }
      >

          <section className="left__statusbar">
            <div>
             <h1
             style={
              theme.name === "dark" ? 
              {
                  color:"white"
              }:
              {
                 color:"black"
              }
          }
             >
             Madan Bhandari Memorial college
             
             </h1>
            </div>

            <div>
              <h3 
              style={
                theme.name === "dark" ? 
                {
                    color:"white"
                }:
                {
                   color:"black"
                }
            }
              >
              system overview
              </h3>
              <small
              style={
                theme.name === "dark" ? 
                {
                    color:"white"
                }:
                {
                   color:"black"
                }
            }
              >Active 4 mins ago</small>
            </div>
          
          </section>

          <section className="right__statusbar">
              <div className="notification"
              style={
                theme.name === "dark" ? 
                {
                    color:"white"
                }:
                {
                   color:"black"
                }
            }
              >
                <NotificationsIcon/>
                <MailOutlineIcon/>
                <p
                style={
                  theme.name === "dark" ? 
                  {
                      color:"white"
                  }:
                  {
                     color:"black"
                  }
              }
                >Prasidha Acharya</p>
              </div>

              <div className="switch">
                 <div className="switch__btn"
                 style={
                  theme.name === "dark" ? 
                  {
                      color:"white"
                  }:
                  {
                     color:"black"
                  }
              }
                 >
                 <NightsStayIcon/>
                 <Switch 
                    className="btn"
                    color="default"
                    onChange={()=>handleSwitch()}/>
                 <WbSunnyIcon/>
                 </div>
               
                 <div className="logout" >
                 <IconButton 
                 style={
                  theme.name === "dark" ? 
                  {
                      color:"white"
                  }:
                  {
                     color:"black"
                  }
              }
                
              onClick={() => logout()}
                 >
                  <ExitToAppIcon 
                  style={
                    theme.name === "dark" ? 
                    {
                        color:"white"
                    }:
                    {
                       color:"black"
                    }
                }
                  /> logout
                 </IconButton>

                 </div>
              </div>
          </section>
      
      
      </div>

      
    )
}
export default Statusbar


