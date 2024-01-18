import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Contact from './components/Contact'
import ResturantDetail from './components/ResturantDetail'

let App =()=>{

  return(
    <div className='app'>
      <Header/>
      <Hero/>
      <Outlet/>
    </div>
  )
}

let appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/resturant/:id',
        element:<ResturantDetail/>
      }
    ]
  },

])

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)