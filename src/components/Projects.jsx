import React from 'react'

import styles from './Projects.module.css'

import Project from './Project'

export default function Projects({lang}) {
  return (
    <div id='projects' className={styles.container}>
      <h1 className={styles.title}>{lang ? 'Proyectos' : 'Projects'}</h1>

      <Project name='To Do App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1651255732/To%20Do%20App/To_Do_App_ipkary.jpg' 
      technologies='React, CSS, HTML, Javascript' 
      description='App de tareas en la que se pueden crear y borrar estas.' 
      github='https://github.com/FacundoFigueroa23/To-Do-App' 
      deploy='https://to-do-app-98.vercel.app' lang={lang}/>

      <Project name='Weather App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1651445438/Weather%20App/WeatherApp_qzamu5.jpg' 
      technologies='React, CSS, HTML, Javascript' 
      description='App del clima en la que se ve el tiempo de la ciudad buscada.' 
      github='https://github.com/FacundoFigueroa23/Weather-App' 
      deploy='https://weather-app-98.vercel.app' lang={lang}/>

      <Project name='Portfolio App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1654606805/Portfolio_hg0jom.jpg' 
      technologies='React, CSS, HTML, Javascript, EmailJS' 
      description='Mi portafolio personal.' 
      github='https://github.com/FacundoFigueroa23/Portfolio' 
      deploy='https://facundoleonelfigueroa.vercel.app' lang={lang}/>
      
      <Project name='Henry Pokemon App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1654603781/Henry%20Pokemon/Henry_Pokemon_App_qpgmii.jpg' 
      technologies='React, Redux, CSS, HTML, Javascript, NodeJS, Express, PostgreSQL, Sequelize, PokeApi' 
      description='App en la que se pueden ver pokemons, filtrarlos, ordenarlos, crear nuevos pokemons, entre otras funcionalidades.' 
      github='https://github.com/FacundoFigueroa23/Henry-Pokemon-App' lang={lang}/>
    </div>
  )
}