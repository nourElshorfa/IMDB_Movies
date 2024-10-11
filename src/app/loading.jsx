import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center">
      <img src="spinner.svg" alt="loading..." />
      <h2>Loading...</h2>
    </div>
  )
}
