import React from 'react'
import styles from './Home.module.css'
import pdf from '../assets/FacundoLeonelFigueroa-DesarrolladorFrontend-CV.pdf'

const es = ["Hola! Mi nombre es", "y soy", "Desarrollador Frontend", "Descarga mi CV", "Contrátame"]
const en = ["Hi! My name is", "and I'm", "Frontend Developer", "Download my Resume", "Hire Me"]

export default function Home({lang}) {
  return (
    <div className={styles.container}>
        <section className={styles.content}>
          <div className={styles.subContent}>
            <h3 className={styles.subTitle}>{lang ? es[0] : en[0]}</h3>
            <h1 className={styles.title}>Facundo Leonel Figueroa</h1>
            <h3 className={styles.subTitle}>{lang ? es[1] : en[1]}</h3>
            <h1 className={styles.title}>{lang ? es[2] : en[2]}</h1>
          </div>
          <div className={styles.buttons}>
            <a className={styles.button} href={pdf} target='_blank' rel='noreferrer'>
              {lang ? es[3] : en[3]}
            </a>
            <a className={styles.secondButton} href='#contact'>
              {lang ? es[4] : en[4]}
            </a>
          </div>
        </section>
    </div>
  )
}