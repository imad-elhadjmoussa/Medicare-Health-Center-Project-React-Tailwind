import { motion } from 'framer-motion'
import React from 'react'

export const Item = ({ icon, title, text }) => {
    return (
        <motion.div
            className=' h-full items-center p-4 rounded-sm  bg-gray-100 shadow-md cursor-pointer sm:max-w-none max-w-[400px]   flex flex-col gap-5   min-w-[250px]  '
        >
            <div>
                <img className=' size-[100px] ' src={icon} alt={title} />
            </div>

            <div className=' flex flex-col gap-3 text-center '>
                <h1 className=' font-bold text-gray-800 text-3xl '>
                    {title}
                </h1>
                <p className=' text-gray-600 '>
                    {text}
                </p>
            </div>
        </motion.div>
    )
}
