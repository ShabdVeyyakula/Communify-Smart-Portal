import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profImg from '../public/prof.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
  return (
    <div className='h-screen flex flex-col' >
      <TopBar />
      <div className='flex flex-grow' >
        <SideBar />
        <PageContent content={props.children} />
      </div>
    </div>
  )
}

const TopBar = () => {
  return (
    <div className='flex items-center bg-communify-green  ' >
      <div className='w-44 py-6 flex justify-center items-center border-b border-r border-white' >
        <FontAwesomeIcon icon={faCity} className='text-white text-xl' />
        <h1 className='ml-3 text-white font-semibold' >Communify</h1>
      </div>
      <TopBarLink name='About us' href='#' />
      <TopBarLink name='Help' href='#' />
      <TopBarLink name='Legal' href='#' />
      <Profile />
    </div >
  )
}

const TopBarLink = ({ name, href }) => {
  return (
    <Link href={href}><a className='text-white ml-6'  >{name}</a></Link>
  )
}

const Profile = () => {
  return (
    <>
      <div className='ml-auto h-9 w-9 rounded-full bg-gray-400' ></div>
      <p className='ml-3 text-white' >Shabd Veyyakula</p>
      <FontAwesomeIcon icon={faSignOutAlt} className='ml-4 mr-5 text-gray-300' />
    </>
  )
}


const SideBar = () => {
  return (
    <div className='bg-communify-black w-44' >SideBar</div>
  )
}

const PageContent = ({ content }) => {
  return (
    <div className='flex-grow' >
      {content}
    </div>
  )
}



const Card = (props) => {
  return (
    <div className={'p-4 mb-5 rounded-lg ' + props.color} >{props.children}</div>
  )
}

const SidebarLink = (props) => {
  const router = useRouter()

  const colorClasses = props.href === router.pathname ? 'text-yellow-500' : 'text-gray-600 group-hover:text-yellow-500'
  const paddingClasses = props.name === 'Sign Out' ? 'mb-0' : 'mb-5'

  return (
    <Link href={props.href} passHref>
      <div className={'group mx-7 cursor-pointer ' + paddingClasses} >
        <FontAwesomeIcon icon={props.icon} className={'mr-4 transition ease-in duration-100 ' + colorClasses} />
        <a className={'transition ease-in duration-100 ' + colorClasses} >{props.name}</a>
      </div>
    </Link>
  )
}

const ProfileLink = (props) => {
  return (
    <Link href='' passHref>
      <div className='group flex items-center mx-7 mb-5 cursor-pointer' >
        {/* <FontAwesomeIcon icon={props.icon} className={'mr-4 transition ease-in duration-100 ' + colorClasses} /> */}
        <Image src={profImg} alt="Pic" />
        <a className='transition text-gray-600 hover:text-yellow-500 ease-in duration-100' >Shabd V</a>
      </div>
    </Link>
  )
}


export default Navigation
