import React from 'react'
import Card from './Card';


export default function Results({results}) {
  // console.log( "seko" ,results);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-7xl mx-auto my-10 ">
      
         <Card results={results}/>
         
         

    </div>
  )
}
