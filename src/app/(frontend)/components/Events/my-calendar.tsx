import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { CalendarEvent, MyCalendarProps } from '../../types/events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './style.css'

const localizer = momentLocalizer(moment)

export default function MyCalendar({ events, showCalendar, setShowCalendar }: MyCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  /*To get rid of the "Today," "Back", "Next" and other view options 
  that come default with the component.*/
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

        {showCalendar && (
          <img
            src="/images/calendar-icon.png"
            alt="Toggle Calendar View"
            onClick={() => setShowCalendar(!showCalendar)}
          />
        )}
      </div>
    )
  }

  return (
    <div className="calendar-container">
      <Calendar<CalendarEvent>
        date={currentDate}
        onNavigate={(newDate: Date) => setCurrentDate(newDate)}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={['month']}
        style={{ height: 500 }}
        components={{ toolbar: CustomToolbar }}
        onSelectEvent={(event: { id: string }) => {
          window.location.href = `/events-details/${event.id}`
        }}
      />
    </div>
  )
}
