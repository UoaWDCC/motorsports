'use client'
import { useEffect, useState } from 'react';
import { EventsBlocks } from './EventsBlock';
import { eventData } from '../../data/events';
import { EventItem } from '../../types/events';
import './Events.css';

export default function Events(){
    const [eventsData, setEventsData] = useState<EventItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`/api/events`)
                const events = await response.json()
                const docs = Array.isArray(events.docs) ? events.docs : []

                const mappedEvents: EventItem[] = docs.map((event: any, index: number) => {
                    let imageUrl = ''
                    if (event.image) {
                        imageUrl = typeof event.image === 'string' 
                            ? event.image 
                            : event.image.url || ''
                    }

                    if (!imageUrl) {
                        imageUrl = '/images/event1.jpg'
                    }

                    return {
                        id: String(event.id),
                        title: event.title,
                        info: event.info,
                        imageUrl: imageUrl,
                        linkUrl: `/events-details/${event.id}`,
                    }
                })

                setEventsData(mappedEvents)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchEvents()
    }, [])

    if (loading) {
        return <div className="events-loading">Loading events...</div>
    }

    if (!eventsData.length) {
        return <div className="events-empty">No events found</div>
    }

    return(
        <section className="events-section">
            <div className='events-container'>
                <div className='events-header'>
                    <div className='events-title'>EVENTS</div>
                </div>
                <div className='events-body'>
                    <EventsBlocks events={eventsData}/>
                </div>
            </div>
        </section>
    );
}