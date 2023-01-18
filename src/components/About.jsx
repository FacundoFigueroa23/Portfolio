import React from 'react'
import Image from '../assets/Image.jpeg'
import styles from './About.module.css'

const es = ["Sobre Mi", "Soy una persona a la que le apasiona la tecnología, le gustan los desafíos, y sobre todo, aprender y mejorar cada día.", 
"Descubrí el mundo de la programación mientras me encontraba estudiando mi anterior carrera (ingeniería ambiental). Después me enteré del bootcamp de 'Soy Henry' gracias a un amigo y luego de meses de mucho esfuerzo y sacrificio logré graduarme.", 
"Actualmente me encuentro en búsqueda de mi primer trabajo en el que pueda iniciarme y desarrollarme como profesional."]

const en = ["About Me", "I'm someone very passionate about technology, I love challenges, and above all, learning and improving every day.", 
"I discovered the world of programming while I was studying my previous career (environmental engineering). Then I found out about the 'Soy Henry' bootcamp thanks to a friend and after months of sacrifice and hard work I managed to graduate.", 
"I'm currently looking for my first job in which I can start and develop as a professional."]

export default function About({lang}) {
  return (
    <div id='about' className={styles.container}>
      <h1 className={styles.title}>{lang ? es[0] : en[0]}</h1>
      <div className={styles.content}>
        <section className={styles.text}>
          <p>{lang ? es[1] : en[1]}</p>
          <p>{lang ? es[2] : en[2]}</p>
          <p>{lang ? es[3] : en[3]}</p>
        </section>
        <section className={styles.imgContainer}>
          <img src={Image} alt="Myself" />
        </section>
      </div>
    </div>
  )
}