import './Sponsors.css'
import ImageDisplay from './ImageDisplay'

const sponsors = [
  {
    id: 1,
    sponsorName: 'Red Bull',
    linkUrl: 'https://www.redbull.com/',
    imageUrl: 'images/sponsors/redbull-300ppi.png',
  },
]

export default function SponsorsBlock() {
  return (
    <div className="sponsors-block">
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="sponsor-item">
          <ImageDisplay
            linkUrl={sponsor.linkUrl}
            imageUrl={sponsor.imageUrl}
            alt={sponsor.sponsorName}
            classname="sponsor-logo"
          />
        </div>
      ))}
    </div>
  )
}
