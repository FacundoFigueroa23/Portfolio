import React, {useState, useEffect} from 'react'

import './App.css';

import Home from './components/Home';

export default function App() {
  const [lang, setLang] = useState(true)

  const changeLang = () => {
    setLang(!lang)
  }

  useEffect(()=>{
    
  }, [lang])
  return (
    <div className='container'>
      <Home lang={lang} changeLang={changeLang}/>
    </div>
  )
}