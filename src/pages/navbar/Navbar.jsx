import React, { useState } from 'react'
import logo from "./../../Images/medical_logo.png"
import { sections } from './data'
import { motion, AnimatePresence } from 'framer-motion'
import colseIcon from "./../../Images/close-icon.svg"
import menuIcon from "./../../Images/menu-icon.svg"
import { scrollToSection } from './data'

export const Navbar = ({ isOpen, setOpen}) => {
    return (
        <>
            <motion.div
                className=' bg-primary mx-[20px] z-40 font-semibold fixed top-[10px]   py-[20px] px-[30px] rounded-sm flex justify-between items-center text-white '
                style={{ width: "calc(100% - 40px)"}}
                initial={{ y: "-120%" }}
                animate={{ y: 0 }}
            >
                {/* Logo */}
                <div onClick={() => { scrollToSection('Hero') }} className=' cursor-pointer' >
                    <img src={logo} alt="Mediacare Health Center" className='  w-[130px] h-[30px]' />
                </div>

                <div
                    onClick={() => { setOpen((prev) => !prev) }}
                    className=' md:hidden cursor-pointer'
                >
                    <img className=' size-9 text-white' src={menuIcon} alt="Menu" />
                </div>

                {/* Links on larg screen */}
                <ul className=' md:flex gap-10 hidden '>
                    {
                        sections.map((ele) => {
                            return (
                                <li
                                    className=' cursor-pointer relative text-lg font-semibold  link-underline '
                                    key={ele}
                                    onClick={() => { scrollToSection(ele) }}
                                >
                                    {ele}
                                </li>
                            )
                        })
                    }
                </ul>
            </motion.div>

            <AnimatePresence>
                {/* Sections on small screen */}
                {
                    isOpen &&
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                        exit={{ x: "100%", transition: { duration: 0.4 } }}
                        className=' flex flex-col z-[1000] gap-16 px-7 py-[40px] text-white font-semibold fixed bg-primary right-0 top-0 h-full md:hidden'

                    >
                        <div className=' flex gap-12 items-center '>
                            <div onClick={() => { scrollToSection('Hero'); setOpen((prev) => !prev) }} className=' cursor-pointer' >
                                <img src={logo} alt="Mediacare Health Center" className='  w-[130px] h-[30px]' />
                            </div>
                            <div
                                onClick={() => { setOpen((prev) => !prev) }}
                                className='md:hidden cursor-pointer'
                            >
                                <img className=' size-10 text-white' src={colseIcon} alt="Close" />
                            </div>
                        </div>

                        <motion.ul
                            className=' flex flex-col items-start gap-10 '
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.3 }}
                        >
                            {
                                sections.map((ele) => {
                                    return (
                                        <motion.li
                                            key={ele}
                                            className=' cursor-pointer relative text-lg font-semibold  link-underline  '
                                            variants={{
                                                hidden: {
                                                    y: '-100px',
                                                    opacity: 0,
                                                },
                                                visible: {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                            }}
                                            onClick={() => { scrollToSection(ele);setOpen((prev=>!prev)) }}
                                        >
                                            {ele}
                                        </motion.li>
                                    )
                                })
                            }
                        </motion.ul>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
