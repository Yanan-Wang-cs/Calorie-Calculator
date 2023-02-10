import React from 'react'
import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Record from '../pages/Record'
import Mine from '../pages/Mine'
import AddItem from '../pages/Food/AddItem'
import Weight from '../pages/Weight'
import asyncComponents from './asyncComponents'
const element = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/record',
    element: <Record />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/search',
    element: asyncComponents(()=>import('../pages/About')),
  },
  {
    path: '/food/addItem',
    element: <AddItem />,
  },
  {
    path: '/weight',
    element: <Weight />,
  },
  {
    path: '/about/:id',
    element: <About />,
  },
  {
    path: '/home1',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <About />,
      },
    ],
  },
  {
    path: '/test',
    element: <Test myprop="mypropvalue" />,
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]

export default element
