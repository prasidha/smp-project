import React ,{ useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const logout = () => {
        setIsLoggedIn(false)
    }

    // useEffect(() => {
    //    setIsLoggedIn(true)
    // }, [])  
    return (
       <Router>
            <Switch>
                <Route exact path="/" 
                    render ={()=>
                        isLoggedIn ? 
                            <Redirect to ="/home"/> : 
                            <LoginPage 
                                setIsLoggedIn={setIsLoggedIn}                           
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
            </Switch>
       </Router>
    )
}

export default App
