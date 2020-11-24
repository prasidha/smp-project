import React ,{useContext , useState}from 'react'
import './LoginPage.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {Button,Switch} from '@material-ui/core'
import {themeContext} from './ThemeContext'

function LoginPage({login}) {
    const [theme , dispatchTheme] = useContext(themeContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const date= new Date()
    const hour = date.getHours()

     let timeOfDay

     if(hour<12){
         timeOfDay="Morning"
     }
     else if(hour >= 12 && hour < 17){
         timeOfDay="Afternoon"
     }else{
         timeOfDay="Night"
     }

     const handleSwitch = () => {
         if(theme.name === "dark"){
            dispatchTheme({type:"LIGHT"})
         }
         else if (theme.name === "light"){
           dispatchTheme({type:"DARK"})
         }
     }

     const logIn = (e) => {
         e.preventDefault();
         if (username === "admin" && password === "admin"){
            localStorage.setItem("token", "logged in");
               login()
               setUsername("")
               setPassword("")   
         }
     }

    return (
        
        <div className="login" style ={
            theme.name === "dark" ?
            {
               backgroundColor:"#2d3436"
            }:
            {
                backgroundColor:"white"
            }
        }>
            <div className="login__container">
                <div className="login__info">
                        <div className="loginInfoVerticalText">
                        <div className="verticalText">
                         MBM</div>
                        </div>
                        <div className="loginInfoTitle">MBM</div>
                        <div className="loginInfoGreeting">
                            <h2>Welcome,</h2>
                                Good {timeOfDay}
                         </div>
                        <div style={{ color: "#fff" }}>TERMS OF USE & CONDITIONS</div>
                
                </div>
                <div className="login__form">
                    <div className="swticher">
                    <p>username : admin  &nbsp;&nbsp; password:admin</p> 
                    <NightsStayIcon/>
                    <Switch
                    color="default"
                      onChange={()=>handleSwitch()}
                    />
                    <WbSunnyIcon/>
                    </div>
        
           
              <form className="loginInputs" onSubmit={(e) => logIn(e)}>
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
                Login
                </h1>
              
                <input 
                        style={
                            theme.name === "dark"
                            ? {
                                background:"white",
                               
                                }
                            : {
                                background: "#f1f1f1",
                              
                                }
                        }
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)}/>
                <br />
                <input 
                style={
                    theme.name === "dark"
                    ? {
                        background:"white",
                        // color: "#dddddd",
                        }
                    : {
                        background: "#f1f1f1",
                        // color: "#3a3a3a",
                        }
                }
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
                />
                <Button 
                   type="submit" 
                   style={
                       theme.name === "dark" ?
                       {
                           backgroundColor : "white"
                        }
                       :
                       {
                           backgroundColor : "black"
                       }

                   }
                  >
                    <DoubleArrowIcon
                           style ={
                               theme.name === "dark" ?
                               {
                                   color:'black'     
                               }
                               :
                               {
                                     color:'white'
                               }
                           }
                    />
                </Button>
              </form>
        
              <div className="website">BACK TO WEBSITE</div>
                
                </div>
            </div>
        </div>
    )
}

export default LoginPage

