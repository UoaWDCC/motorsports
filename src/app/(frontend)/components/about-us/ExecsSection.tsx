import styles from './aboutuscomponent.module.css'
import ExecsCard from './ExecsCard'
import { Exec, ExecsSectionProps, DescriptionProps } from '../../types/aboutus'




export default function ExecsSection({ title, execs, titleColour }: ExecsSectionProps) {

  
  return (
    <div className={styles.execsSection}>
      <h2 className={styles.execsSectionTitle}>
        MEET THE <span style={{ color: titleColour, fontWeight: 'bold' }}>{title}</span> TEAM
      </h2>
      <div className={styles.execsRow}>
        {execs.map((exec: Exec, index) => (
          <ExecsCard exec={exec} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
