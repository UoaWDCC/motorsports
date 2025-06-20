import ExecsSection from '../components/about-us/ExecsSection'
import { fakeExecs } from '../data/execs'
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
      <div className="content">
        <div className="about-us-row-1">
          <div className="about-us-row-1-image">
            <Image
              src="/images/20250412_094454.jpg"
              className="about-us-image"
              alt="About Us"
              fill
            />
          </div>
          <div className="about-us-row-1-text">
            <h2>Lorem Ipsum Dolor sit amet</h2>
            <p>Lorem ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>
        <div className="about-us-row-1">
          <div className="about-us-row-1-text">
            <h2>Lorem Ipsum Dolor sit amet</h2>
            <p>Lorem ipsum dolor.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate v.
            </p>
          </div>

          <div className="about-us-row-1-image">
            <Image
              src="/images/20250412_094454.jpg"
              className="about-us-image"
              alt="About Us"
              fill
            />
          </div>
        </div>
      </div>
      <div>
        <ExecsSection title="LEADERSHIP" execs={fakeExecs} titleColour="#0078BE" />
        <ExecsSection title="SOCIAL" execs={fakeExecs} titleColour="#F2C01F" />
        <ExecsSection title="COMPETITIVE" execs={fakeExecs} titleColour="#EB534A" />
      </div>
    </div>
  )
}
