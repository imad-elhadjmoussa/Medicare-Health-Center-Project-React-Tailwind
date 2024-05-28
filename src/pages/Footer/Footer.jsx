import React from 'react'
import logo from './../../Images/medical_logo.png'
import { info } from './data'
import { scrollToSection, sections } from '../navbar/data'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import bgFooter from './../../Images/house_footer_bg-1.jpg'
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <motion.div
            style={{ backgroundImage: `url(${bgFooter})` }}
            className=' p-20 md:bg-cover md:bg-center bg-bottom  bg-no-repeat flex flex-col sm:flex-row  gap-10 text-white '>
            <motion.div
                className=' flex flex-col gap-6 max-w-[400px] '
                initial={{ y: -100, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                    }
                }}
                viewport={{ once: true, amount: "all" }}
            >
                <div>
                    <img className=' w-[250px] h-[40px] ' src={logo} alt="Logo" />
                </div>
                <p className=' text-lg'>
                    The Medicare Health Center is a your go - to
                    team of doctors for all your medical needs.
                </p>
                <div className=' flex flex-col gap-3'>
                    {
                        info.map((ele) => {
                            return (
                                <div className=' flex gap-5 items-center' key={ele.id}>
                                    {ele.icon}
                                    <span className=' block'>
                                        {ele.text}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>

            <div className=' flex flex-col gap-5'>
                <motion.h1
                    className=' text-4xl font-bold underline'
                    initial={{ y: -100,opacity:0 }}
                    whileInView={{
                        y: 0,
                        opacity:1,
                        transition: {
                            delay: 0.3
                        }
                    }}
                    viewport={{ once: true, amount: "all" }}
                >
                    Links
                </motion.h1>
                <ul className=' flex flex-col items-start gap-2 cursor-pointer text-lg'>
                    {
                        sections.map((ele, index) => {
                            return (
                                <motion.li
                                    onClick={() => { scrollToSection(ele) }}
                                    className=' relative link-underline'
                                    key={ele}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: (index+1)*0.4
                                        }
                                    }}
                                    viewport={{ once: true, amount: "all" }}
                                >
                                    <DoubleArrowIcon />  {ele}
                                </motion.li>
                            )
                        })
                    }
                </ul>
            </div>
        </motion.div>
    )
}
