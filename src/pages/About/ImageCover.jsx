import React from 'react'
import {motion} from 'framer-motion'

export const ImageCover = ({ image, alt }) => {
    return (
        <div className=' img_shadow w-auto inline-block cursor-pointer   '>
            <motion.img
                src={image}
                alt={alt}
                className=' md:max-w-[450px] max-w-[350px]  h-[450px] '
                initial={{x:'20px',y:'20px'}}
                whileInView={{x:0,y:0,transition:{duration:0.3}}}
                viewport={{once:true,amount:"all"}}
                whileHover={{
                    x:"10px",
                    y:"10px"
                }}

            />
        </div>
    )
}
