import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex gap-7 justify-center bg-amber-100 p-3 dark:bg-gray-500 text-xl font-semibold">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
