import React ,{useState}from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'

function CalendarPage() {
    const [date,setDate]=useState(new Date())

    const onChange = () => {
        setDate(date)
    }

    return (
        <div className="calendar__container">
            
        <Calendar
        onChange={onChange}
        value={date}
        />
        </div>
    )
}

export default CalendarPage
