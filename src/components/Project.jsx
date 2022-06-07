import React from 'react'

import styles from './Project.module.css'

export default function Project({name, url, description, technologies, github, deploy, lang}) {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={url} alt={name} />
        <div className={styles.content}>
            <p className={styles.title}>{name}</p>
            <p className={styles.text}>{description}</p>
            <p className={styles.text}>{lang ? `Tecnologías: ${technologies}` : `Technologies: ${technologies}`}</p>
            <section className={styles.buttons}>
              <a href={github} target='_blank' rel='noreferrer' className={styles.iconButton}>
                <img className={styles.icon} src='https://api.iconify.design/uiw:github.svg' alt='GitHub' />
              </a>
              <a href={deploy} target='_blank' rel='noreferrer' className={styles.iconButton}>
                <img className={styles.icon} src='https://api.iconify.design/uiw:link.svg' alt='Link' />
              </a>
            </section>
        </div>
    </div>
  )
}