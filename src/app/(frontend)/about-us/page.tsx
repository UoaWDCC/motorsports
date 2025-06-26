import ExecsSection from '../components/about-us/ExecsSection'
import Description from '../components/about-us/Description'
import { fakeExecs, fakeDescription } from '../data/execs'
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
      <div>
        <Description desc={fakeDescription}/>
      </div>
      <div>
        <ExecsSection title="LEADERSHIP" execs={fakeExecs} titleColour="#0078BE" />
        <ExecsSection title="SOCIAL" execs={fakeExecs} titleColour="#F2C01F" />
        <ExecsSection title="COMPETITIVE" execs={fakeExecs} titleColour="#EB534A" />
      </div>
    </div>
  )
}
