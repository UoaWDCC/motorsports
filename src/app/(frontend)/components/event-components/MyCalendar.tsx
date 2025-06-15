import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { MyCalendarProps } from '../../types/events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.css'

const localizer = momentLocalizer(moment)


/*To get rid of the "Today," "Back", "Next" and other view options 
that come default with the component.*/
const CustomToolbar = (toolbar: any) => {
    const month = moment(toolbar.date).format('MMMM').toUpperCase()
    return (
      <div className="custom-toolbar">
        <button className="nav-arrow" onClick={() => toolbar.onNavigate('PREV')}>&lt;</button>
        <span className="month-label">{month}</span>
        <button className="nav-arrow" onClick={() => toolbar.onNavigate('NEXT')}>&gt;</button>
      </div>
    )
  }

export default function MyCalendar({ events }: MyCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date())
    
    return (
        <div className="calendar-container">
        <Calendar
            date={currentDate}
            onNavigate={(newDate: Date) => setCurrentDate(newDate)}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            views={['month']}
            style={{ height: 500 }}
            components={{
            toolbar: CustomToolbar,
            }}
        />
        </div>
    )
}