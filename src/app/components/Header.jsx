import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
export default function Header() {
  return <>

  <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">

  <div className="flex gap-4">

  <MenuItem title="home" address="/" Icon={AiFillHome}/>
  <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
  </div>

  <div className="flex gap-4 items-center">
    <DarkModeSwitch/>

  <Link href="/" className="flex gap-2 items-center">
    <span className="text-2xl bg-amber-500 px-2 py-1 rounded-lg font-bold">IMDB</span>
    <span className="hidden sm:inline text-xl">Clone</span>
  </Link>
  </div>


  </div>


  
  </>
}
