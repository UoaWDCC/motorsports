import Image from 'next/image'
import styles from './aboutuscomponent.module.css'

interface Exec {
  name: string
  role: string
  image: string // URL for the exec's image
}

export default function ExecsCard({ exec, index }: { exec: Exec; index: number }) {
  return (
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
  )
}
