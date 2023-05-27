import React from 'react'
import TodoList from './TodoList';

function Body() {
    const options = [
        {
            id: 1,
            title: "categories",
        },
        {
            _id: 2,
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
    return (
        <div className='w-full bg-bodyColor flex flex-col space-y-5'>
            <div className='flex space-x-10 items-center h-12'>
                <input type="text" name="text" id="text" placeholder='Enter yout todo.....'
                    className='w-[80%] h-full bg-bodyColor border-[1px] border-gray-500 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white'
                />
                <div className='w-[20%] h-full relative'>
                    <select id="" className="w-full h-full text-center capitalize outline- none bg-bodyColor border-2 border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white">
                        {
                            options.map((option) => (
                                <option key={option.id} value={option.title}>{option.title}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <button className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md">
                Add Todo
            </button>

            <div>
                <ul>
                    <li className='w-full h-10 flex justify-center items-center px-4 border-none border-gray-400rounded-md'>
                        <TodoList/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Body
