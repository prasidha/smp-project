import React from 'react'
import './HomePage.css'
import Sidebar from './Sidebar'
import Statusbar from './Statusbar'

function HomePage({logout}) {
    return (
        <div className="homepage">

            <Sidebar/>
            <Statusbar logout ={logout}/>
        </div>
    )
}
export default HomePage
