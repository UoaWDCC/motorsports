import ExecsSection from '../components/about-us/ExecsSection'
import Description from '../components/about-us/Description'
import { fakeDescription } from '../data/execs'
import '../styles.css'
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Us',
}

export default async function AboutUsPage() {
  // build a safe base URL (fallback to localhost for local dev)
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL ?? 'http://localhost:3000'

  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/execs?limit=25`, { cache: 'no-store' })
  const data = await res.json()
  const execs = data.docs


  if (!execs || execs.length === 0) return <div>Loading execs...</div>

  // Filter execs by team
  const leadershipExecs = execs.filter((exec: any) => exec.team === 'leadership')
  const socialExecs = execs.filter((exec: any) => exec.team === 'social')
  const competitiveExecs = execs.filter((exec: any) => exec.team === 'competitive')
  const generalExecs = execs.filter((exec: any) => exec.team === 'general')

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
        <Description desc={fakeDescription} />
      </div>
      <div>
        <ExecsSection title="LEADERSHIP" execs={leadershipExecs} titleColour="#0078BE" />
        <ExecsSection title="SOCIAL" execs={socialExecs} titleColour="#F2C01F" />
        <ExecsSection title="COMPETITIVE" execs={competitiveExecs} titleColour="#EB534A" />
        <ExecsSection title="GENERAL" execs={generalExecs} titleColour="#A2D300" />
      </div>
    </div>
  )
}
