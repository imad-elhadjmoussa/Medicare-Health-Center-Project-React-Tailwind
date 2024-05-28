import React from 'react'
import serBg from "./../../Images/medicare_highlightbg.jpg"
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { scrollToSection } from '../navbar/data';


export const Treatment = () => {
    return (
        <div
            className=' w-screen h-[150vh] px-[20px] bg-cover bg-center text-white bg-no-repeat flex flex-col justify-center items-center gap-7 '
            style={{ backgroundImage: `url(${serBg})` }}
        >

            <motion.h1
                className=' font-bold md:text-[5rem] text-[4rem] text-center overflow-hidden'
                initial={{ height: 0 }}
                whileInView={{
                    height: 'auto',
                    transition: {
                        delay: 0.2,
                        duration: 0.4,
                    }
                }}
                viewport={{ amount: "all", once: true }}
            >
                We Take Care
                <span className=' text-[3rem] font-semibold block pt-1' >Of Your Needs </span>
            </motion.h1>
            <motion.p
                className=' text-lg max-w-[500px] text-center '
                initial={{ opacity:0 }}
                whileInView={{
                    opacity:1,
                    transition: {
                        delay: 0.7,
                        duration: 0.4,
                    }
                }}
                viewport={{ amount: "all", once: true }}
            >
                Allergy shots and immunotherapy carbohydrate
                counting chronic decongestants dislocation epistaxis.
            </motion.p>
            <motion.button
                className=' text-lg flex items-center gap-4 font-bold border border-white rounded-sm px-10 py-3  '
                initial={{ scale:0, opacity: 0 }}
                whileInView={{ scale:1, opacity: 1, transition: { delay: 1.1 } }}
                whileHover={{
                    borderColor: "#ffffff2e",
                    backgroundColor: "#ffffff2e",
                    transition: {
                        duration: 0.2
                    }
                }}
                viewport={{ amount: "all", once: true }}
                onClick={()=>{scrollToSection("Services")}}
            >
                <span className=' block'>
                    Our Services
                </span>
                <span className=' block'>
                    <ArrowRightIcon />
                </span>
            </motion.button>

        </div>
    )
}
