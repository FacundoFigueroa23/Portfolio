import React from 'react'

import styles from './Technologies.module.css'

import Icon from './Icon'

export default function Technologies() {
  return (
    <div id='technologies' className={styles.container}>
        <Icon name='Javascript' 
        url='https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg' />
        <Icon name='HTML' url='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' />
        <Icon name='CSS' url='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' />
        <Icon name='React' url='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' />
        <Icon name='Redux' url='https://res.cloudinary.com/mis-fotos/image/upload/v1654359980/Icons/Redux_c7aeki.png' />
        <Icon name='NodeJS' url='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' />
        <Icon name='ExpressJS' url='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' />
        <Icon name='PostgreSQL' url='https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' />
        <Icon name='Sequelize' url='https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg' />
        <Icon name='MongoDB' url='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' />
        <Icon name='Mongoose' url='https://res.cloudinary.com/mis-fotos/image/upload/v1654360593/Icons/Mongoose_xnua76.png' />
        <Icon name='Git' url='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' />
    </div>
  )
}