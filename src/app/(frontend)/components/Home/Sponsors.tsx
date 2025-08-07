import './Sponsors.css'
import SponsorsBlock from './SponsorsBlock'
import SponsorsContact from './SponsorsContact'

export default function Sponsors() {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="sponsors-title">Sponsors</div>
        </div>
        <div className="sponsors-body">
          <SponsorsBlock />
          <SponsorsContact />
        </div>
      </div>
    </section>
  )
}
