/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { TiTick } from 'react-icons/ti'
import { motion } from 'framer-motion'

const SuccessMsg = () => {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                x: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                }

            }}
            className='absolute shadow-todoShodow font-titleFont tracking-wide font-medium tedt-lg top-2 left-[40%] bg-bodyColor px-10 py-4 rounded-md border-b-[10px] border-b-green-500 text-green-500'>
            <p className='flex items-center gap-4'>
                <span>
                    <TiTick  />
                </span>Todo Added SuccessFully
            </p>
        </motion.div>
    )
}

export default SuccessMsg
