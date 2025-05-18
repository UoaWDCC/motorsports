import { assertValidExecutionArguments } from 'graphql/execution/execute'
import styles from './aboutuscomponent.module.css'
import Image from 'next/image'
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
        {execs.map((exec: Exec, index) => (
          <div key={index} className={styles.execsCard}>
            <Image
              src={exec.image}
              alt={`${exec.name}'s photo`}
              className={styles.execsImage}
              width={140}
              height={200}
            />
            <h3 className={styles.execName}>{exec.name}</h3>
            <p className={styles.execRole}>{exec.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
