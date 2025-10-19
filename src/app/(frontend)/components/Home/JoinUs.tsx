import './JoinUs.css'
import JoinUsText from './JoinUsText'
import ImageDisplay from './ImageDisplay'

export default async function JoinUs() {
  // safe base URL (server-side)
  const base =
    process.env.NEXT_PUBLIC_PAYLOAD_URL ?? process.env.PAYLOAD_URL ?? 'http://localhost:3000'
  const endpoint = '/api/home' 

  // defaults (fallback UI)
  let contentHtml = `
    <h1>ACCELERATE WITH VROOM</h1>
    <p>Could not fetch information</p>
  `
  let image_details = {
    imageUrl: '/images/join_us.png',
    alt: 'Join Us',
    linkUrl: '',
  }

  try {
    const url = new URL(endpoint, base).toString()
    const res = await fetch(url, { cache: 'no-store' })
    if (res.ok) {
      const json = await res.json()
      // payload returns docs array for collections
      const doc = Array.isArray(json.docs) ? json.docs[0] : (json.doc ?? json)
      if (doc) {
        // adjust keys to match your collection fields
        contentHtml = doc.info ?? contentHtml
        const photo = doc.info_photo ?? doc.info_photo?.value ?? null
        image_details = {
          imageUrl: photo?.url ?? photo?.path ?? doc.info_photo ?? image_details.imageUrl,
          alt: photo?.alt ?? doc.info_photo?.alt ?? image_details.alt,
          linkUrl: doc.info_photo?.link ?? '',
        }
      } else {
        console.warn('JoinUs: no document returned from payload /api/home')
      }
    } else {
      console.error('JoinUs: fetch failed', res.status, res.statusText)
    }
  } catch (err) {
    console.error('JoinUs: failed to fetch payload', err)
  }

  return (
    <section className="joinus" id="JoinUs">
      <div className="joinus-container">
        <div className="joinus-content">
          <div className="joinus-left">
            <JoinUsText htmlContent={contentHtml} />
            <div className="join-us-button-div">
              <button className="join-now-button">JOIN NOW</button>
            </div>
          </div>

          <div className="joinus-right">
            <ImageDisplay
              linkUrl={image_details.linkUrl}
              imageUrl={image_details.imageUrl}
              alt={image_details.alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
