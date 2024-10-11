
"use client"

import React from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'

import {useTheme} from 'next-themes'

export default function DarkModeSwitch() {


    const {theme, setTheme , systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
        {currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')}
         className="text-2xl hover:text-amber-500 cursor-pointer"/> 
         : 
         <MdDarkMode  onClick={() => setTheme('dark')}
         className="text-2xl hover:text-amber-500 cursor-pointer" />}
     
    </div>
  )
}
