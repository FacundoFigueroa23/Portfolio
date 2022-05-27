import React from 'react'
import NavBar from './NavBar'
import styles from './Home.module.css'
import pdf from '../assets/CV.pdf'

export default function Home() {
  return (
    <div className={styles.container}>
        <NavBar/>
        <section className={styles.content}>
          <div className={styles.subContent}>
            <h3 className={styles.subTitle}>Hola! Mi nombre es</h3>
            <h1 className={styles.title}>Facundo Leonel Figueroa</h1>
            <h3 className={styles.subTitle}>y soy</h3>
            <h1 className={styles.title}>Full Stack Developer</h1>
          </div>
          <div className={styles.buttons}>
            <a href={pdf} target='_blank' rel='noreferrer'>
              <button className={styles.button}>Descarga mi CV</button>
            </a>
            <a href='https://www.linkedin.com/in/facundo-figueroa-dev' target='_blank' rel='noreferrer'>
              <button className={styles.button}>Contratame</button>
            </a>
          </div>
        </section>
    </div>
  )
}