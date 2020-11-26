import React ,{ useState, useEffect,useContext,createContext} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css'
import MailPage from './MailPage'
import TeachersPage from './TeachersPage'



function App() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(getLoginStatus())
    const [darkMode, setDarkMode] = useState(getTheme())
   
    const login = () => {
        setIsLoggedIn(true)
    }
    
    const logout = () => {
        setIsLoggedIn(false)
    }

    const userDesc = {
        isLoggedIn,
        darkMode,
    }

    useEffect(() => {
       localStorage.setItem("userDesc",JSON.stringify(userDesc))
    }, [isLoggedIn,darkMode])

    function getLoginStatus() {
        let getUserStatus = JSON.parse(localStorage.getItem("userDesc"))
        if (getUserStatus){
            return getUserStatus.isLoggedIn
          }
          return false
        }

        function getTheme(){
            let getUserStatus = JSON.parse(localStorage.getItem("userDesc"))
            if (getUserStatus){
                return getUserStatus.darkMode
              }
              return false
            }
        
  

   
    return (

       <Router>
            <Switch>
                <Route exact path="/" 
                    render ={()=>
                        isLoggedIn ? 
                            <Redirect to ="/home"/> : 
                            <LoginPage 
                                login={login}                           
                            />  
                    }
                    />
                <Route exact path="/home"
                    render ={ () => 
                       isLoggedIn ? 
                           <HomePage 
                               logout = {logout}
                             /> :
                                <Redirect to ="/" />
                }/>

                <Route exact path="/application"
                     render ={ () => 
                         isLoggedIn ? 
                             <MailPage logout ={logout}/> :
                                 <Redirect to ="/" />
            }/>

            <Route exact path="/teacher"
            render ={ () => 
                isLoggedIn ? 
                    <TeachersPage logout ={logout}/> :
                        <Redirect to ="/" />
   }/>

            </Switch>
       </Router> 
      
    )
}
export default App


