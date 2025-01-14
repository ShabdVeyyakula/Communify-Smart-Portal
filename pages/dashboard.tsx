import React, { useState, useEffect, useContext } from "react"
import Navigation from "../components/nav"
import AuthContext from "../context/authContext"
import Image from "next/image"
import graphImg from "../public/graph.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartPie } from "@fortawesome/free-solid-svg-icons"

const Dashboard = () => {
  const authCtx = useContext(AuthContext)

  const getVal = () => {
    console.log(authCtx.error)
  }

  return (
    <Navigation>
      <div className="flex-grow flex flex-col flex-column items-top m-6 ">
        <GoalList />
        <div className="flex-grow flex bg-red-400">
          <PopularProjects />
          <PopularProjects />
        </div>
      </div>
    </Navigation>
  )
}

const GoalList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-end">
        <h1 className=" text-2xl font-semibold">Dashboard</h1>
        <p className="ml-4 text-communify-green">
          City of Stockton, California
        </p>
      </div>
      <p className="mt-4">Current Goals</p>
      <div className="flex-shrink flex mt-2">
        <Goal
          name="Improving Parks"
          started="6/7/2021"
          finish="2022"
          complete="35%"
          margin="mr-4"
        />
        <Goal
          name="Improving Parks"
          started="6/7/2021"
          finish="2022"
          complete="35%"
          margin="mr-4"
        />
        <Goal
          name="Improving Parks"
          started="6/7/2021"
          finish="2022"
          complete="35%"
          margin="mr-4"
        />
        <Goal
          name="Improving Parks"
          started="6/7/2021"
          finish="2022"
          complete="35%"
          margin=""
        />
      </div>
    </div>
  )
}

const Goal: React.FC<{
  name: string
  started: string
  finish: string
  complete: string
  margin: string
}> = (props) => {
  return (
    <div
      className={`p-6 w-1/5 flex flex-col justify-top items-center bg-communify-black rounded-3xl ${props.margin}`}
    >
      <div className="relative">
        <Image src={graphImg} alt="Graph" height="150" width="150" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-center">
          {props.complete}
          <br />
          Complete
        </p>
      </div>
      <h2 className="text-semibold text-lg mt-2 text-communify-green">
        {props.name}
      </h2>
      <p className="text-white">
        <span className="font-semibold text-sm">Started:</span>
        <span className="text-sm"> {props.started}</span>
      </p>
      <p className="text-white">
        <span className="font-semibold text-sm">Estimated Finish:</span>
        <span className="text-sm"> {props.finish}</span>
      </p>
    </div>
  )
}

const PopularProjects = () => {
  return (
    <div>
      <p className="mt-4 w-full bg-blue-400 border-2 border-green-400">
        Current Popular Projects
      </p>
    </div>
  )
}

export default Dashboard
