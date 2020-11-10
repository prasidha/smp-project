import React ,{useContext}from 'react'
import './LoginPage.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import {Button,Switch} from '@material-ui/core'
import {themeContext} from "./ThemeContext"

function LoginPage() {
    const test = useContext(themeContext)
    console.log(test)
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

    //  const handleSwitch = () => {
    //      if(theme.name === "dark"){
    //         dispatchTheme({type:"LIGHT"})
    //      }
    //      else if (theme.name === "light"){
    //        dispatchTheme({type:"DARK"})
    //      }
    //  }

    return (
        <div>hello world...</div>
        // <div className="login">
        //     <div className="login__container">
        //         <div className="login__info">
        //                 <div className="loginInfoVerticalText">
        //                 <div className="verticalText">
        //                  MBM</div>
        //                 </div>
        //                 <div className="loginInfoTitle">MBM</div>
        //                 <div className="loginInfoGreeting">
        //                     <h2>Welcome,</h2>
        //                         Good {timeOfDay}
        //                  </div>
        //                 <div style={{ color: "#fff" }}>TERMS OF USE & CONDITIONS</div>
                
        //         </div>
        //         <div className="login__form">

        //         <div className="swticher">
        //         <NightsStayIcon/>
        //         <Switch
        //           color="default"
        //           onChange={()=>handleSwitch()}
        //         />
        //         <Brightness5Icon />
        //       </div>
        
           
        //       <form className="loginInputs">
        //         <h1>Login</h1>
        //         <input type="text" name="username" placeholder="Username"/>
        //         <br />
        //         <input type="password" name="password" placeholder="Password"/>
        //         <Button><DoubleArrowIcon/></Button>
        //       </form>
        
        //       <div className="website">BACK TO WEBSITE</div>
                
        //         </div>
        //     </div>
        // </div>
    )
}

export default LoginPage
