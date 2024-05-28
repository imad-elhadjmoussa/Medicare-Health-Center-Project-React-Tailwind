import React from 'react'
import heroBg from "./../../Images/medical_bg1-1.jpg"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion'
import { scrollToSection } from '../navbar/data';


export const Hero = () => {
    return (
        <div
            className=' w-full h-screen  bg-no-repeat md:bg-initial bg-cover bg-center flex   justify-start text-white items-center px-10 md:px-20   '
            style={{ backgroundImage: `url(${heroBg})` }}
            id="Hero"
        >

            <div className=' flex flex-col gap-7 items-start justify-center'>
                <motion.h1
                    className=' md:text-[4rem] font-bold text-[2.7rem] overflow-hidden '
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.4 }}
                >
                    Medical Services
                    <span className=' md:text-[3rem] font-semibold block text-[1.5rem]'>
                        You can Trust
                    </span>
                </motion.h1>

                <motion.p
                    className=' text-lg max-w-[450px]'
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                >
                    The Medicare Health Center is a your go-to team of
                    doctors for all your medical needs. Our specialized
                    team will leave nothing to be desired.
                </motion.p>

                <motion.button
                    className=' text-lg flex items-center gap-4 font-bold border border-white rounded-sm px-10 py-3  '
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1,transition:{delay:1}}}
                    whileHover={{
                        borderColor:"#ffffff2e",
                        backgroundColor:"#ffffff2e",
                        transition:{
                            duration:0.2
                        }
                    }}
                    onClick={()=>{scrollToSection("About")}}
                >
                    <span className=' block'>
                        Our Practice
                    </span>
                    <span className=' block'>
                        <ArrowRightIcon />
                    </span>
                </motion.button>

            </div>
        </div>
    )
}
