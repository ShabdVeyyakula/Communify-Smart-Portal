import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profImg from '../public/prof.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBullseye, faCubes, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
  return (
    <div className='h-screen flex flex-col' >
      <TopBar />
      {/* grow to remaining height and width */}
      <div className='flex flex-grow' >
        <SideBar />
        <div className='flex flex-grow' >
          {props.children}
        </div>
      </div>
    </div>
  )
}

const TopBar = () => {
  return (
    <div className='p-6 bg-blue-400' >
      Top Bar
    </div>
  )
}

const SideBar = () => {
  return (
    <div className='w-60 bg-green-400' >
      Sidebar
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
