import React from 'react'

import styles from './Technologies.module.css'

import Technology from './Technology'

export default function Technologies({lang}) {
  return (
    <div id='technologies' className={styles.container}>
        <h1 className={styles.title}>{lang ? 'Tecnologías' : 'Technologies'}</h1>
        <div className={styles.content}>
          <Technology name='Javascript' 
          url='https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg' />
          <Technology name='HTML' url='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' />
          <Technology name='CSS' url='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' />
          <Technology name='React' url='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' />
          <Technology name='Redux' 
          url='https://res.cloudinary.com/mis-fotos/image/upload/v1654359980/Icons/Redux_c7aeki.png' />
          <Technology name='NodeJS' url='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' />
          <Technology name='ExpressJS' url='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' />
          <Technology name='PostgreSQL' url='https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' />
          <Technology name='MongoDB' url='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' />
          <Technology name='Git' url='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' />
        </div>
    </div>
  )
}