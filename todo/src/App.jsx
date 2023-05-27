/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector } from "react-redux";
import './App.css'
import Body from './components/Body'
import Category from './components/categoty/Category';

function App() {
  const todosItem = useSelector((state) => state.todos.todosList);
  return (
    <div className='w-full min-h-screen pt-4 flex flex-col gap-10 justify-center items-center font-bodyFont bg-gradient-to-t from-sky-100 via-sky-400 to-sky-500 text-white px-4'>
      {
        todosItem.length > 0 ? <Category /> : ""
      }
      <div className='w-[850px] h-full bg-bodyColor p-10 '>
        <Body />
      </div>
    </div>
  )
}

export default App
