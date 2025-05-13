import '../styles.css'
import Image from 'next/image'
export default function AboutUsPage() {
  return (
    <div className="content-page">
      <div className="background-image">
        <Image src="/images/20250412_094454.jpg" className="background-image" alt="About Us" fill />
        <div className="background-gradient"></div>
        <h1>ABOUT US</h1>
      </div>
    </div>
  )
}
