'use server'

import React from 'react';
import { EventsBlocks } from './EventsBlock';
import { getPayload } from 'payload';
import  buildConfig  from '@/payload.config';
import './Events.css';
import { li } from 'framer-motion/client';


export  default async function Events(){
    const payload = await getPayload({ config: buildConfig });
    const events = await payload.find({
        collection: 'events',
        depth: 1,

    })

    const eventItems = events.docs.map((event) => {
    let imageUrl = '/images/placeholder.png' // fallback
    
    if (event.image) {
      if (typeof event.image === 'object' && 'url' in event.image) {
        // Image is populated as an object
        imageUrl = event.image.url || imageUrl
      } else if (typeof event.image === 'string') {
        imageUrl = `/api/media/file/${event.image}`
      }
    }

    return {
      ...event,
      imageUrl,
      linkUrl: `/events/${event.id}`,
    }
  })


    return(
        <section className="events-section">
            <div className='events-container'>
                <div className='events-header'>
                    <div className='events-title'>EVENTS</div>
                </div>
                <div className='events-body'>
                    <EventsBlocks events={eventItems}/>
                </div>
            </div>
        </section>
    );
}