import React, {useState, useEffect} from 'react'

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

import ScrollToTop from 'react-scroll-to-top'

export default function App() {
  const [lang, setLang] = useState(true)

  const changeLang = () => {
    setLang(!lang)
  }

  useEffect(()=>{
    
  }, [lang])
  return (
    <div className='container'>
      <ScrollToTop smooth style={{backgroundColor: 'black'}}
      component={<img src='https://api.iconify.design/uiw:caret-up.svg?color=%23ffffff' alt='CaretUp' />}/>
      <Home lang={lang} changeLang={changeLang}/>
      <About lang={lang}/>
      <Technologies lang={lang}/>
      <Projects lang={lang}/>
      <Contact lang={lang}/>
    </div>
  )
}