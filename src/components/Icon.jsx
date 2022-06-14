import React from 'react'

import styles from './Icon.module.css'

export default function Icon({url, image, name, user}) {
  return (
    <div className={styles.button}>
        <a href={url} target='_blank' rel='noreferrer' className={styles.iconBox}>
            <img src={image} alt={name} className={styles.icon}/>
        </a>
        <p className={styles.text}>{user}</p>
    </div>
  )
}