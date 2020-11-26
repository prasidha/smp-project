import React from 'react'
import Sidebar from './Sidebar'
import Teachers from './Teachers'
import Statusbar from './Statusbar'

function TeachersPage() {
    return (
        <div style={{position:'absolute'}}>
            <Sidebar/>
            <Statusbar/>
            <Teachers/>
        </div>
    )
}

export default TeachersPage
