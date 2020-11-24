import React from 'react'
import './HomePage.css'

import Main from './Main'
import Sidebar from './Sidebar'
import Statusbar from './Statusbar'

function HomePage({logout}) {
    return (
        <div className="homepage">

        <Sidebar/>
        <Statusbar logout = {logout}/> 
       
        <Main/>
        
        </div>      
    )
}
export default HomePage
