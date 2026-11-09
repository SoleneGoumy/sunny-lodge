import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Activities from './pages/Activities.jsx'
import Activity from './pages/Activity.jsx'
import Restaurants from './pages/Restaurants.jsx'
import NotFound from './pages/NotFound.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activites" element={<Activities />} />
          <Route path="activites/:slug" element={<Activity />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
