import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'

let App =()=>{

  return(
    <div className='app'>
      <Header/>
      <Hero/>
      <Body/>
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)