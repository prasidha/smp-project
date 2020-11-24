import React from 'react'
import Mail from './Mail'
import Sidebar from './Sidebar'
import Statusbar from './Statusbar'

function MailPage({logout}) {
    return (
        <div>
            <Sidebar/>
            <Statusbar logout={logout}/>
            <Mail/>
        </div>
    )
}

export default MailPage
