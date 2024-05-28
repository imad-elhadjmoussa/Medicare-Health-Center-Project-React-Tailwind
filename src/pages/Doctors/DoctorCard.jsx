import { motion } from 'framer-motion'
import React from 'react'


export const DoctorCard = ({image,name,spec,text}) => {
    return (
        <div className=' flex flex-col gap-5 min-w-[300px] max-w-[400px] cursor-pointer  '>
            <div className=' overflow-hidden'>
                <motion.img whileHover={{scale:1.2}} className=' h-[300px] w-full bg-cover' src={image} alt={name} />
            </div>
            <div>
                <h1 className=' font-bold text-xl'>
                    {name}
                </h1>
                <h1 className=' text-lg font-semibold text-primary'>
                    {spec}
                </h1>
            </div>
            <div className=''>
                {text}
            </div>
        </div>
    )
}
