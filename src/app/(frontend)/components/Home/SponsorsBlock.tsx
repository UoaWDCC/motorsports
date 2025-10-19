import './Sponsors.css'
import ImageDisplay from './ImageDisplay'
import { getPayload } from 'payload';
import  buildConfig  from '@/payload.config';

export default async function SponsorsBlock() {
  const payload = await getPayload({ config: buildConfig });
  const sponsors = await payload.find({
    collection: 'sponsors',
    depth: 1,
  })

  // fallback if no sponsors found
  if (!sponsors.docs) {
    return (
      <div className="sponsors-block">
        <p>No sponsors found</p>
      </div>
    )
  }

  return (
    <div className="sponsors-block">

        
          <div className="sponsor-item">
            <ImageDisplay
              linkUrl={ ''}
              imageUrl={"images/sponsors/redbull-300ppi.png"}
              
              classname="sponsor-logo"
            />
          </div>
        
    </div>
  )
}