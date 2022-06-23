import React from 'react'

import styles from './Projects.module.css'

import Project from './Project'

export default function Projects({lang}) {
  return (
    <div id='projects' className={styles.container}>
      <h1 className={styles.title}>{lang ? 'Proyectos' : 'Projects'}</h1>

      <Project name='To Do App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1651255732/To%20Do%20App/To_Do_App_ipkary.jpg' 
      technologies='React, CSS, HTML, Javascript, Local storage' 
      description={['App de lista de tareas con local storage.', 'To-do list app with local storage.']} 
      github='https://github.com/FacundoFigueroa23/To-Do-App' 
      deploy='https://to-do-app-98.vercel.app' lang={lang}/>

      <Project name='Weather App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1651445438/Weather%20App/WeatherApp_qzamu5.jpg' 
      technologies='React, CSS, HTML, Javascript' 
      description={['App del clima en la que se puede buscar una ciudad y devuelve el clima actual de la misma.', 
      'Weather app in which you can search for a city and it returns the current weather of the city.']} 
      github='https://github.com/FacundoFigueroa23/Weather-App' 
      deploy='https://weather-app-98.vercel.app' lang={lang}/>

      <Project name='Portfolio App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1654606805/Portfolio_hg0jom.jpg' 
      technologies='React, CSS, HTML, Javascript, EmailJS' 
      description={['Mi portafolio personal.', 'My personal portfolio.']} 
      github='https://github.com/FacundoFigueroa23/Portfolio' 
      deploy='https://facundoleonelfigueroa.vercel.app' lang={lang}/>
      
      <Project name='Henry Pokemon App' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1654603781/Henry%20Pokemon/Henry_Pokemon_App_qpgmii.jpg' 
      technologies='React, Redux, CSS, HTML, Javascript, NodeJS, Express, PostgreSQL, Sequelize, PokeApi' 
      description={["Projecto individual realizado en el bootcamp de 'Soy Henry'. Principales funcionalidades: ver, buscar, crear, filtrar, y ordenar pokemons.", "Individual project realized at 'Soy Henry bootcamp'. Main functionalities: view, search, create, filter, and sort pokemon."]} 
      github='https://github.com/FacundoFigueroa23/Henry-Pokemon-App' lang={lang}/>

      <Project name='Estilo Propio | E-commerce' 
      url='https://res.cloudinary.com/mis-fotos/image/upload/v1655384913/Estilo_propio_b2511y.jpg' 
      technologies='Javascript, NodeJS, Express, MongoDB, Mongoose, Mercado pago SDK' 
      description={["Proyecto final realizado en el bootcamp de 'Soy Henry'. En este proyecto trabajé unicamente en el backend y bajo la metodología Scrum. Principales tareas: creación de cuenta, autenticación, pasarela de pago (Mercado Pago), manejo de inventario.", "Final project realized at 'Soy Henry bootcamp'. In this project I worked only in the backend and under the Srcum methodology. Main tasks: account creation, authentication, payment gateway (Mercado Pago), inventory management."]} 
      github='https://github.com/BusquetsLA/Proyecto-Grupal-Henry/tree/dev' lang={lang}/>
    </div>
  )
}