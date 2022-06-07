import React from 'react'

import styles from './Technology.module.css'

export default function Icon({name, url}) {
  return (
    <div className={styles.icon}>
        <img className={styles.iconImage} 
        src={url} 
        alt={name} />
        <label>{name}</label>
    </div>
  )
}