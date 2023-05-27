/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import Errormsg from './msg/Errormsg';
import SuccessMsg from './msg/SuccessMsg';
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAll, selectTodoList } from '../store/TodoSlice';

function Body() {
    const dispatch = useDispatch()
    const todosItem = useSelector(selectTodoList)
    const [todoValue, setTodoValue] = useState("")
    const [category, setCategory] = useState("")
    // const [current, setCurrent] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [success, setSuccess] = useState("")
    const [show, setShow] = useState(false)
    const [showRemove, setShowRemove] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const options = [
        {
            id: 1,
            title: "categories",
        },
        {
            id: 2,
            title: "personal",
        },
        {
            id: 3,
            title: "business",
        },
        {
            id: 4,
            title: "others",
        },
    ];

    const handleTodo = (e) => {
        e.preventDefault();
        if (!todoValue) {
            setErrorMsg("Please enter a todo");
            setShow(true)
            setShowSuccess(false)
        } else if (!category) {
            setErrorMsg("Please select a category");
            setShow(true)
            setShowSuccess(false)
        } else if (category === "categories") {
            setErrorMsg("Please select a VALID category");
            setShow(true)
            setShowSuccess(false)
        }
        else {
            // console.log(todoValue);
            // console.log(category);
            dispatch(addTodo({
                _id: crypto.randomUUID(),
                todo: todoValue,
                category: category,
            }))
            // setCurrent(todoValue)
            setTodoValue("");
            setShowSuccess(true)
            setShow(false)
            setSuccess("Todo added successfully");

        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            show && setShow(false)
            showSuccess && setShowSuccess(false)
        }, 4000)
        return () => clearTimeout(timeout)
    }, [show, showSuccess])


    return (
        <div className='w-full bg-bodyColor flex flex-col space-y-5'>
            <div className='flex space-x-10 items-center h-12'>
                <input
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                    type="text" name="text" id="text" placeholder='Enter yout todo.....'
                    className='w-[80%] h-full bg-bodyColor border-[1px] border-gray-500 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white'
                />
                <div className='w-[20%] h-full relative'>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        id="" className="w-full h-full text-center capitalize outline- none bg-bodyColor border-2 border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white">
                        {
                            options.map((option) => (
                                <option key={option.id} value={option.title}>{option.title}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <button
                onClick={handleTodo}
                className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md">
                Add Todo
            </button>
            {/* todosItem */}
            <div className='flex-flex-col gap-4'>
                <ul className='grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShodow mt-6 p-4'>
                    {
                        todosItem.length > 0 ? <>                    {
                            todosItem.map((item) => (
                                <TodoList key={item._id} todo={item.todo} category={item.category} _id={item._id} />
                            ))
                        }</>
                            :
                            <h1 className='text-center text-pink-500 font-medium tracking-wide  text-2xl'>No Todos available</h1>
                    }
                </ul>

            </div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    y: {
                        type: "spring", stiffness: 100,
                    },
                }}


                className='flex flex-1'>
                {
                    todosItem.length > 0 && <button
                        onClick={() => dispatch(removeAll())}

                        className=" w-40 h-8 text-sm font-titleFont text-orange-500 hove:text-red-500 font-semibold mx-auto bg-transparent border border-gray-500 hover:border-red-500 duration-300 rounded-md">
                        Clear All
                    </button>
                }
            </motion.div>
            {
                show && <Errormsg errorMsg={errorMsg} />
            }
            {
                showSuccess && <SuccessMsg showSuccess={showSuccess} />
            }
        </div>
    )
}

export default Body
