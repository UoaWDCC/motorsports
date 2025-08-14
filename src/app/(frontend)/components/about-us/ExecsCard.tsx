import Image from 'next/image'
import styles from './aboutuscomponent.module.css'
import { Exec } from '../../types/aboutus'

export default function ExecsCard({ exec, index }: { exec: Exec; index: number }) {
  return (
    <div key={index} className={styles.execsCard}>
      <Image
        src={exec.photo?.url}
        alt={exec.photo?.alt || `${exec.name}'s photo`}
        className={styles.execsImage}
        width={140}
        height={200}
      />
      <h3 className={styles.execName}>{exec.name}</h3>
      <p className={styles.execRole}>{exec.role}</p>
    </div>
  )
}
