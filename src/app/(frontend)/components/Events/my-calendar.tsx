import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { MyCalendarProps } from '../../types/events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.css'

const localizer = momentLocalizer(moment)

export default function MyCalendar({ events, showCalendar, setShowCalendar }: MyCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  //
  const CustomToolbar = (toolbar: any) => {
    const month = moment(toolbar.date).format('MMMM').toUpperCase()
    return (
      <div className="custom-toolbar-container">
        <div className="custom-toolbar">
          <button className="nav-arrow" onClick={() => toolbar.onNavigate('PREV')}>
            &lt;
          </button>
          <span className="month-label">{month}</span>
          <button className="nav-arrow" onClick={() => toolbar.onNavigate('NEXT')}>
            &gt;
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="calendar-container">
      <Calendar
        date={currentDate}
        onNavigate={(newDate: Date) => setCurrentDate(newDate)}
        localizer={localizer}
        events={events}
        startAccessor={(event) => new Date(event.start)}
        endAccessor={(event) => new Date(event.end)}
        defaultView="month"
        views={['month']}
        style={{ height: 500 }}
        components={{ toolbar: CustomToolbar }}
        onSelectEvent={(event) => {
          window.location.href = `/events-details/${event.id}`
        }}
      />
    </div>
  )
}
