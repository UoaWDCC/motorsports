import '../styles.css'
import Image from 'next/image'
export default function AboutUsPage() {
  return (
    <div className="content-page">
      {/*reusable across similar page styles*/}
      <div className="background-image">
        <Image src="/images/20250412_094454.jpg" className="background-image" alt="About Us" fill />
        <div className="background-gradient" />
        <h1>ABOUT US</h1>
      </div>

      {/*customised content for the page*/}
      <div className="about-us-row-1"></div>
      <div className="about-us-row-2"></div>


    </div>
  )
}
