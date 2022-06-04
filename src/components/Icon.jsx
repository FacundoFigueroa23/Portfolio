import React from 'react'

import styles from './Icon.module.css'

export default function Icon({name, url}) {
  return (
    <div className={styles.icon}>
        <img className={styles.img} 
        src={url} 
        alt={name} />
        <label>{name}</label>
    </div>
  )
}