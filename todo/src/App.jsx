/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Body from './components/Body'

function App() {


  return (
    <div className='w-full min-h-screen pt-4 flex justify-center items-center font-bodyFont bg-gradient-to-t from-sky-100 via-sky-400 to-sky-500 text-white px-4'>
      <div  className='w-[850px] bg-bodyColor p-10 '>
        <Body/>
      </div>
    </div>
  )
}

export default App
