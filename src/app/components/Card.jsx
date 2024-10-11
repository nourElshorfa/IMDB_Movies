import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Card({results}) {

    console.log("hello from CARD Component" , results);
    
  return <>
  {results.map(  (item)=>  
       <div className="hover:shadow-2xl p-2 cursor-pointer font-semibold border  m-2 border-emerald-100 rounded-lg group" key={item.id}   >
        <Link href={`/movie/${item.id}`} className=" ">
         <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="movies_Photos" className="w-full group-hover:scale-105 duration-300  group-hover:opacity-90 " />
        </Link>
         <div className="flex justify-between">
            <div className="mt-2">

         <h2>{item.name}</h2>
         <h2>{item.title}</h2>
            </div>
            <div className="flex items-center gap-1">

        <span className="font-bold">{item.vote_average.toFixed(1)}</span>
        <FaStar className="text-amber-400" />
            </div>
         </div>
       </div>
      )}
  
  
  </>
    
   
  
}

