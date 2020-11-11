import React from 'react'
import './Statusbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import {IconButton, Switch} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { LocalDiningOutlined } from '@material-ui/icons'

function Statusbar({logout}) {
    return (
        <div className="statusbar">
            <div className="top__statusbar">
                <div><h4>Madan Bhandari Memorial college </h4></div>
                <div className="notification">
                    <IconButton>
                      <NotificationsIcon />
                    </IconButton>
                    
                    <IconButton>
                      <MailOutlineIcon /> 
                    </IconButton>  
                </div>
            </div>

            <div className="bottom__statusbar">
                <div className="page__title">
                   <h4>pagetitle</h4>
                   <small>active 4 mins ago</small>
                </div>

                <div className="right__statusbar">
                    <div className="switcher">
                      <NightsStayIcon/>
                        <Switch/>
                     <WbSunnyIcon/>
                    </div>
                    
                        <div className="logout">
                                <IconButton onClick={() => logout()}>
                                  <ExitToAppIcon />
                                    logout
                                </IconButton>
                        </div>    
                </div>
            </div>
        </div>
    )
}
export default Statusbar
