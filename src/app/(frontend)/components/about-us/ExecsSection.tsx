import styles from './aboutuscomponent.module.css'
interface Exec {
  name: string
  role: string
  image: string // URL for the exec's image
}

interface ExecsSectionProps {
  title: string // Title of the section (e.g., sub-team name)
  execs: Exec[] // List of execs
}

export default function ExecsSection({ title, execs }: ExecsSectionProps) {
  return (
    <div className={styles.execsSection}>
      <h2 className={styles.execsSectionTitle}>MEET THE {title} TEAM</h2>
      <div className={styles.execsRow}>
        {execs.map((exec, index) => (
          <div key={index} className={styles.execsCard}>
            <img src={exec.image} alt={`${exec.name}'s photo`} className="exec-image" />
            <h3 className="exec-name">{exec.name}</h3>
            <p className="exec-role">{exec.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
