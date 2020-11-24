import React ,{ useState, useEffect,createContext} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css'
import MailPage from './MailPage'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
   
    const login = () => {
        setIsLoggedIn(true)
    }
    
    const logout = () => {
        setIsLoggedIn(false)
    }

    // useEffect(() => {
       
    // }, [isLoggedIn])

     
 console.log(isLoggedIn)
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

            </Switch>
       </Router>  
    )
}
export default App


