import React from 'react'
import { FaStar } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa6";

export default async function page(movieId) {
    // console.log("SAMY" ,movieId.params.id);

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId.params.id}?api_key=e112da2aae7fb47b25d4d23b214c4d91&language=en-US` , {
      next : {
        revalidate : 10000
      }
    })
    
    const data = await res.json()
    
    console.log("jelly" , data);
    
  return (
    <div className="container mx-auto mt-10 flex items-center">

    <div className='w-1/2 me-4'>
    <img
  src={data.backdrop_path && `https://image.tmdb.org/t/p/original/${data.backdrop_path}` || `https://image.tmdb.org/t/p/original/${data.poster_path}`}
  alt="Movie Backdrop"
  className="w-full" 
/>
    </div>
     <div className='w-1/2'>
      <h1 className='text-3xl dark:text-amber-500 font-bold text-amber-500 my-10'>{data.title || data.name}</h1>
      <h2 className='text-xl tracking-wider my-10'>{data.overview}</h2>
      <h2 className='font-bold'>Date Released: {data.release_date}</h2>
      <div className='flex items-center gap-4 my-5'>
      <h2 className='font-bold text-xl'>Rating: {data.vote_average.toFixed(1)}</h2>
      <FaStar className="text-amber-400 text-xl" />

      
      
      </div >

      <div className='buttons flex gap-4'>

      <button className='bg-emerald-500 text-xl p-4 me-3 rounded-lg text-white flex items-center gap-1 group hover:bg-emerald-700 duration-200 hover:scale-105'>Watch Trailer <VscDebugStart className='text-xl group-hover:text-amber-500 duration-200 '  /> </button>

      <button className='bg-red-500 text-xl p-4 me-3 rounded-lg text-white flex items-center gap-1 group hover:bg-red-700 duration-200 hover:scale-105'> Download  <FaDownload className='text-xl group-hover:text-amber-500 duration-200 ' /> </button>
      </div>
     </div>
    </div>
  )
}
