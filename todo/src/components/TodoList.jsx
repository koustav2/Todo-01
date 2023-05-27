/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../store/TodoSlice'

const TodoList = ({ todo, _id }) => {
    const dispatch=useDispatch()
    const [mark, setMark] = useState(false)
    return (
        <motion.li
            initial={{ y:10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                y: {
                    type: 'spring',
                    stiffness: 120,
                }
            }}
            key={_id}
            onClick={
                () => setMark(!mark)}
            className={
                `${mark ? 'line-through border-l-orange-500 border-orange-900' : 'border-l-green-500 border-green-900'
                }
                    w-full font-titleFont font-medium text-base border-[1px] border-l-8  px-2 py-2 cursor-pointer flex flex-1 justify-between
            `
            }
        >
            <span className='text-gray300'>{todo}</span>
            {/* <span 
            // onClick={()=>dispatch(updateTodo(_id))}
            
            className=' text-2xl pl-80 text-gray300 hover:text-green-500 duration-300 cursor-pointer'>
                <FaEdit />
            </span> */}
            <span
            onClick={()=>dispatch(deleteTodo(_id))} 
             className=' text-2xl text-gray300 hover:text-red-500 duration-300 cursor-pointer'>
                <MdDelete />
            </span>

        </motion.li>
    )
}

export default TodoList
