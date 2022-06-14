import React from 'react'
import styles from './NavBar.module.css'

const es = ["Inicio", "Sobre Mi", "Tecnologias", "Proyectos", "Contacto", "EN"]
const en = ["Home", "About Me", "Technologies", "Projets", "Contact", "ES"]

export default function NavBar({lang, changeLang}) {
  return (
    <div className={styles.container}>
      <p className={styles.section}>{lang ? es[0] : en[0]}</p>
      <a href='#about' className={styles.section}>{lang ? es[1] : en[1]}</a>
      <a href='#technologies' className={styles.section}>{lang ? es[2] : en[2]}</a>
      <a href='#projects' className={styles.section}>{lang ? es[3] : en[3]}</a>
      <a href='#contact' className={styles.section}>{lang ? es[4] : en[4]}</a>
      <button onClick={() => {changeLang()}} className={styles.button}>{lang ? es[5] : en[5]}</button>
    </div>
  )
}