"use client"
import React from 'react'
import { useEffect } from 'react'


export default function error({error , reset}) {


    useEffect( ()=> {
       console.log(error);
       
    } , [error]   )
  return (
    <div className="text-center py-5 mt-10">
        <h1 className="text-2xl">Something went wrong , please try again later</h1>
        <button className="hover:text-amber-500 hover:text-xl py-5" onClick={ ()=> reset() }>
            Try again
        </button>
      
    </div>
  )
}
