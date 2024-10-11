import React from 'react'
import Results from './components/Results'


export default async function  Home({searchParams}) {

  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=e112da2aae7fb47b25d4d23b214c4d91&language=en-US` , {
    next : {
      revalidate : 10000
    }
  })

  const data = await res.json()



  const results = data.results
  // console.log("hello" , results);
  

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
