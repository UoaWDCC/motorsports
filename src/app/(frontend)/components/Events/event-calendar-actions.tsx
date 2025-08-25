'use client'

import Image from 'next/image'
import { Icon } from '../Icon'

export default function EventCalendarActions({ event }: { event: any }) {
  // Format: YYYYMMDDTHHMMSS
  const formatICSTime = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0')
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
  }

  const gcParams = {
    text: event.title,
    start: formatICSTime(new Date(event.dateStart)),
    end: formatICSTime(new Date(event.dateEnd)),
    details: event.info,
    location: event.location,
    ctz: 'Pacific/Auckland',
  }

  const gcAdd = () => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcParams.text}&dates=${gcParams.start}/${gcParams.end}&details=${gcParams.details}&location=${gcParams.location}&ctz=${gcParams.ctz}`
  }

  const formatICSEvent = () => {
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DTSTART:${gcParams.start}`,
      `DTEND:${gcParams.end}`,
      `DESCRIPTION:${event.info}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
  }

  const handleDownload = () => {
    const content = formatICSEvent()
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${event.title}.ics`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <span className="event-details-calendar-icon">
      <Icon
        src="/images/download.png"
        alt="Download ICS"
        width={64}
        height={64}
        onClick={(e) => {
          e.preventDefault()
          handleDownload()
        }}
        href="#"
      />
      <Icon
        src="/images/Google_Calendar_Icon.png"
        alt="Add to Google Calendar"
        width={64}
        height={64}
        href={gcAdd()}
      />
    </span>
  )
}