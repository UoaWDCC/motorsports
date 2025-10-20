'use server'
import './Sponsors.css'
import ImageDisplay from './ImageDisplay'
import { getPayload } from 'payload'
import buildConfig from '@/payload.config'

export default async function SponsorsBlock() {
  const payload = await getPayload({ config: buildConfig })
  const sponsors = await payload.find({
    collection: 'sponsors',
    depth: 2,
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
      {sponsors.docs.map((sponsor) => {
        const base = process.env.NEXT_PUBLIC_PAYLOAD_URL ?? process.env.PAYLOAD_URL ?? 'http://localhost:3000'
        const imageUrl = sponsor.logo && typeof sponsor.logo === 'object' && 'url' in sponsor.logo
          ? `${base}${sponsor.logo.url}` 
          : '/images/placeholder.png'

        return (
          <div key={sponsor.id} className="sponsor-item">
            <ImageDisplay
              linkUrl={ ''}
              imageUrl={imageUrl}
              alt={sponsor.name}
              classname="sponsor-logo"
            />
          </div>
        )
      })}
    </div>
  )
}
