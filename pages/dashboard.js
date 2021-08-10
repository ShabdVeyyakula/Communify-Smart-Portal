
import React, { useState, useEffect, useContext } from 'react'
import Navigation from '../components/nav'
import AuthContext from '../context/authContext'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const authCtx = useContext(AuthContext)

  const getVal = () => {
    console.log(authCtx.error)
  }


  return (
    <Navigation>
      Test
      <button onClick={getVal} >get val</button>
    </Navigation>
  )
}

export default Dashboard