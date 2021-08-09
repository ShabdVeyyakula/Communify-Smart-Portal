import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import profImg from '../public/prof.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBullseye, faCubes, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {
  return (
    <div className='h-screen flex' >
      <div className='h-full flex flex-col justify-center p-10' style={{ width: '360px' }}>
        <Card color='bg-gray-100' >
          <p className='text-gray-600 text-center' >Communify</p>
        </Card>
        <Card color='bg-gray-100'>
          <SidebarLink name='Dashboard' icon={faTachometerAlt} href='/dashboard' />
          <SidebarLink name='Goals' icon={faBullseye} href='/goals' />
          <SidebarLink name='Community' icon={faCubes} href='/community' />
          <SidebarLink name='Calendar' icon={faCalendar} href='/calendar' />
        </Card>
        <Card color='bg-gray-100'>
          <ProfileLink />
          <SidebarLink name='Sign Out' icon={faSignOutAlt} href='/' />
        </Card>
      </div>
      {props.children}
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
