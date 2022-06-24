import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const FooterMain = () => {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}

export default FooterMain