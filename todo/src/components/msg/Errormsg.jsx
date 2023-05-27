/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { motion } from 'framer-motion'

const Errormsg = ({ errorMsg }) => {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0,opacity: 1 }}
            transition={{
                y: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                }

            }}
            className='absolute shadow-todoShodow font-titleFont tracking-wide font-medium tedt-lg top-2 left-[40%] bg-bodyColor px-10 py-4 rounded-md border-b-[10px] border-b-red-500 text-red-500'>
            <p className='flex items-center gap-4'>
                <span>
                    <ImSpinner9 className='animate-spin' />
                </span>{errorMsg}
            </p>
        </motion.div>
    )
}

export default Errormsg
