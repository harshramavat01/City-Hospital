import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'

const HeaderMain = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default HeaderMain