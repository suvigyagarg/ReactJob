import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function mainlayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <ToastContainer />
    </div>
  )
}

export default mainlayout