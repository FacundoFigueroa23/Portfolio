import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <p className={styles.section}>Inicio</p>
      <p className={styles.section}>Sobre Mi</p>
      <p className={styles.section}>Tecnologias</p>
      <p className={styles.section}>Proyectos</p>
      <p className={styles.section}>Contacto</p>
    </div>
  )
}