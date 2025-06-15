import react from 'react';
import { EventsBlocks } from './EventsBlock';
import { eventData } from '../../data/events';
import { EventItem } from '../../types/events';
import './Events.css';

export default function Events(){
    const eventsData:  EventItem[] = eventData.map(event => ({
        id: String(event.id),
        title: event.title,
        info: event.info,
        imageUrl: event.imageUrl,
        linkUrl: "events/"+String(event.id)
    }));
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