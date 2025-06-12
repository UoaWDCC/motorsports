import react from 'react';
import { EventsBlocks } from './EventsBlock';
import './Events.css';

export default function Events(){
    const events = [
        {
            id: "1",
            title: "SIMULATOR RACING",
            text: "adipiscing elit. Quisque accumsan lectus et eleifend",
            imageUrl: "images/event1.jpg",
            linkUrl: "events"
        },
        {
            id: "2",
            title: "Have a good day",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan lectus et eleifend rutrum. In scelerisque id ligula eu rhoncus.Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl.",
            imageUrl: "images/event2.jpg",
            linkUrl: "events"
        },
        {
            id: "3",
            title: "WATCH PARTY",
            text: "Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl.",
            imageUrl: "images/event3.jpg",
            linkUrl: "events"
        },
        {
            id: "4",
            title: "others",
            text: "Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl",
            imageUrl: "images/event4.jpg",
            linkUrl: "events"
        }
    ];
    return(
        <section className="events-section">
            <div className='events-container'>
                <div className='events-header'>
                    <div className='events-title'>EVENTS</div>
                </div>
                <div className='events-body'>
                    <EventsBlocks events={events}/>
                </div>
            </div>
        </section>
    );
}