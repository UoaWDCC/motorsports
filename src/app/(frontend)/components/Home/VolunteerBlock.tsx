import {  getPayload } from 'payload';

import  buildConfig  from '@/payload.config';
import ImageDisplay from './ImageDisplay'

export default async function VolunteerBlock() {

  const payload = await getPayload({ config: buildConfig });
      const volunteer = await payload.find({
          collection: 'events',
          depth: 1,
          where: {
            info: {
              like: 'volunteer' 
            }
          }
  
      })
  

  return (
    <div className="volunteer-block">
      <div className="volunteer-image">
        <ImageDisplay imageUrl="images/event1.jpg" alt="Volunteer Image" classname="" />
      </div>
      <div className="volunteer-text">
        <div className="volunteer-text-container">
          <div className="volunteer-text-content">
            <p>{volunteer.docs[0].info}</p>
          </div>
          <div className="volunteer-link">
            <a href="#">VOLUNTEER</a>
          </div>
        </div>
      </div>
    </div>
  )
}
