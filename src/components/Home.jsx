import React from 'react'
import styles from './Home.module.css'
import cv from '../assets/CV-Facundo-Figueroa.pdf'
import resume from '../assets/Resume-Facundo-Figueroa.pdf'

const es = ["¡Hola! Mi nombre es", "y soy", "Desarrollador Frontend", "Descarga mi CV", "¡Contrátame!"]
const en = ["Hi! My name is", "and I'm", "Frontend Developer", "Download my Resume", "Hire Me!"]

export default function Home({lang}) {
  return (
    <div className={styles.container}>
        <section className={styles.content}>
          <div className={styles.subContent}>
            <h3 className={styles.subTitle}>{lang ? es[0] : en[0]}</h3>
            <h1 className={styles.title}>Facundo Figueroa</h1>
            <h3 className={styles.subTitle}>{lang ? es[1] : en[1]}</h3>
            <h1 className={styles.title}>{lang ? es[2] : en[2]}</h1>
          </div>
          <div className={styles.buttons}>
            {
              lang ?
              <a className={styles.button} href={cv} target='_blank' rel='noreferrer'>{es[3]}</a> :
              <a className={styles.button} href={resume} target='_blank' rel='noreferrer'>{en[3]}</a>
            }
            <a className={styles.secondButton} href='#contact'>
              {lang ? es[4] : en[4]}
            </a>
          </div>
        </section>
    </div>
  )
}