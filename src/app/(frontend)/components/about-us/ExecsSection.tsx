import styles from './aboutuscomponent.module.css'
import ExecsCard from './ExecsCard'

interface Exec {
  name: string
  role: string
  image: string // URL for the exec's image
}

interface ExecsSectionProps {
  title: string // Title of the section (e.g., sub-team name)
  execs: Exec[] // List of execs
  titleColour?: string
}

export default function ExecsSection({ title, execs, titleColour }: ExecsSectionProps) {
  return (
    <div className={styles.execsSection}>
      <h2 className={styles.execsSectionTitle}>
        MEET THE <span style={{ color: titleColour, fontWeight: 'bold' }}>{title}</span> TEAM
      </h2>
      <p>Bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl.</p>
      <div className={styles.execsRow}>
        {execs.map((exec: Exec, index) => (
          <ExecsCard exec={exec} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
