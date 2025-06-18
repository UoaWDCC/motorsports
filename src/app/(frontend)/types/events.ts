import { Dispatch, SetStateAction } from "react"

// Temp event object, will replace with a collection object once developed
export type TEvent = {
  id: string
  title: string
  info: string
  dateStart: string
  dateEnd: string
  location: string
  imageUrl: string
}

export interface CalendarEvent {
  start: Date
  end: Date
  title: string
}

export interface MyCalendarProps {
  events: CalendarEvent[]
  showCalendar: boolean
  setShowCalendar: Dispatch<SetStateAction<boolean>>
}

export interface EventListViewProps {
  showCalendar: boolean
  setShowCalendar: Dispatch<SetStateAction<boolean>>
}

export interface EventItem {
    id: string;
    title: string;
    info: string;
    imageUrl: string;
    linkUrl: string;
}

export interface EventItemProps {
    eventItem: EventItem;  
    index: number;
}

export interface EventsBlockProps {
    events: EventItem[];
}

export interface IEventsProps {
  type: string
  showCalendar: boolean
  setShowCalendar: Dispatch<SetStateAction<boolean>>
}

export interface IEventTileProps {
  event: TEvent
}

export interface IHeaderProps {
  text: string
}
