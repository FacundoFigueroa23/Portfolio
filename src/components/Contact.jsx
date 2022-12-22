import React, { useState } from 'react'

import styles from './Contact.module.css'

import emailjs from '@emailjs/browser'

import Icon from './Icon'

const es = ["Contacto"]
const en = ["Contact"]

export default function Contact({lang}) {
    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChangeInput = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, input 
        , process.env.REACT_APP_PUBLIC_KEY).then(res => {
            alert(`${lang ? 'Mensaje enviado' : 'Message sent'}`)
            console.log("Res: ", res)
        }).catch(err => {
            alert('Error')
            console.log("Err: ", err)
        })
        setInput({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }
  return (
    <div id='contact' className={styles.container}>
        <h1 className={styles.title}>{lang ? es[0] : en[0]}</h1>
        <div className={styles.content}>
            <section className={styles.buttons}>
                <Icon url='#' image='https://api.iconify.design/uiw:environment.svg?color=%23000000'
                name='Location' user='Córdoba Capital, Argentina' />

                <Icon url='https://www.linkedin.com/in/facundo-figueroa-dev' name='LinkedIn' 
                image='https://api.iconify.design/uiw:linkedin.svg?color=%230077b5' user='/facundo-figueroa-dev' />

                <Icon url='https://github.com/FacundoFigueroa23' name='GitHub' 
                image='https://api.iconify.design/uiw:github.svg?color=%23000000' user='/FacundoFigueroa23' />

                <Icon url='mailto:facu.figueroa.dev@gmail.com' name='Gmail'
                image='https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg' user='facu.figueroa.dev@gmail.com' />
            </section>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type='text' value={input.name} onChange={handleChangeInput}
                placeholder={lang ? 'Nombre' : 'Name'} required name='name'/>

                <input className={styles.input} type='email' value={input.email} onChange={handleChangeInput}
                placeholder={lang ? 'Correo electrónico' : 'Email'} required name='email'/>

                <input className={styles.input} type='text' value={input.subject} name='subject' onChange={handleChangeInput}
                placeholder={lang ? 'Asunto' : 'Subject'} required />

                <textarea wrap='soft' className={styles.message} type='text' value={input.message} required 
                onChange={handleChangeInput} name='message' placeholder={lang ? 'Mensaje' : 'Message'} />

                <input className={styles.submit} type='submit' value={lang ? 'Enviar' : 'Send'} />
            </form>
        </div>
    </div>
  )
}