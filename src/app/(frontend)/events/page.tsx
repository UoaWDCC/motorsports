import React from 'react'

export const UpcomingEventLimit = 3
export const PreviousEventLimit = 2

// Temp event object, will replace with a collection object once developed
export type TEvent = {
    id: number,
    title: string,
    info: string,
    date: string,
    location: string
}

const EventsPage = () => {
  return (
    <>
      <h1>Events Page </h1>
      <p>Temporary Page Template for the Events Page!</p>
    </>
  )
}

export default EventsPage