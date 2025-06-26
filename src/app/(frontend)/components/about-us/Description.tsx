import Image from 'next/image'
import styles from './aboutuscomponent.module.css'
import { DescriptionProps } from '../../types/aboutus'

export default function Description({ desc }: { desc: DescriptionProps[]}) {
  return (
    <div className={styles["content"]}>
        <div className={styles["about-us-row-1"]}>
          <div className={styles["about-us-row-1-image"]}>
            <Image
              src={desc[0].image}
              className={styles["about-us-image"]}
              alt="About Us"
              fill
            />
          </div>
          <div className={styles["about-us-row-1-text"]}>
            <h2>{desc[0].title}</h2>
            <p>{desc[0].subtitle}</p>
            <p>
              {desc[0].content}
            </p>
          </div>
        </div>
        <div className={styles["about-us-row-1"]}>
          <div className={styles["about-us-row-1-text"]}>
            <h2>{desc[1].title}</h2>
            <p>{desc[1].subtitle}</p>
            <p>
              {desc[1].content}
            </p>
          </div>

          <div className={styles["about-us-row-1-image"]}>
            <Image
              src={desc[1].image}
              className={styles["about-us-image"]}
              alt="About Us"
              fill
            />
          </div>
        </div>
    </div>
  )};