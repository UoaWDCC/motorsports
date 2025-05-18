import ExecsSection from '../components/about-us/ExecsSection'
import '../styles.css'
import Image from 'next/image'
export default function AboutUsPage() {
  const fakeExecs = [
    { name: 'John Doe', role: 'President', image: '/images/about-us/placeholderExec.png' },
    { name: 'John Smith', role: 'Treasurer', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jane Doe', role: 'Events Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jane Smith', role: 'Marketing Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jim Doe', role: 'Social Lead', image: '/images/about-us/placeholderExec.png' },
    { name: 'Jill Smith', role: 'Events Team', image: '/images/about-us/placeholderExec.png' },
    { name: 'Josh Doe', role: 'General Team', image: '/images/about-us/placeholderExec.png' },
    // { name: 'Jo Smith', role: 'General Team', image: '/images/about-us/placeholderExec.png' },
  ]

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
        <ExecsSection title="LEADERSHIP" execs={fakeExecs} />
        <ExecsSection title="SOCIAL" execs={fakeExecs} />
        <ExecsSection title="COMPETITIVE" execs={fakeExecs} />
      </div>
    </div>
  )
}
