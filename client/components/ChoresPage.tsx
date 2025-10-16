import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

function ChoresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <br></br>
      <div className="app flex flex-grow flex-col items-center">
        <h1 className="text-3xl font-bold">My Chores</h1>
        <div className="mt-8">
          <p className="text-gray-600">Your chores will appear here...</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ChoresPage
