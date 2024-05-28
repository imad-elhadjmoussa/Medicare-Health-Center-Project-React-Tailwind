import { motion } from 'framer-motion'
import React from 'react'
import { doctors } from './data'
import { DoctorCard } from './DoctorCard'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { PrimaryBtn } from '../About/PrimaryBtn';


export const Doctors = () => {
    return (
        <div className=' flex flex-col gap-20'>
            <div className=' flex flex-col items-center gap-5 text-center'>
                <div className=' w-[50%] flex items-center justify-center'>
                    <motion.hr
                        className=' bg-primary w-[50%] h-1  rounded-lg'
                        initial={{ width: 0 }}
                        whileInView={{
                            width: "50%",
                            transition: {
                                delay: 0.2,
                                duration: 0.4
                            }
                        }}
                        viewport={{ once: true, amount: "all" }}
                    />
                </div>
                <h2 className=' text-primary font-semibold text-3xl text-center'>
                    Your Professionals
                </h2>
                <h1 className=' font-bold text-4xl'>
                    We have Medical Staff
                    <span className=' block font-semibold '>For All Specializations</span>
                </h1>
                <p className=' text-gray-600 max-w-[400px] '>
                    Body type bone marrow certified diabetes educators
                    islocation frenulum hemangioma hormone larynx.
                </p>
            </div>

            <motion.div className=' flex flex-wrap items-center justify-center  gap-10'>
                {
                    doctors.map((ele, index) => {
                        return (
                            <motion.div
                                className=' md:flex-1 overflow-hidden' key={ele.id}
                                initial={{ scaleY: 0 }}
                                whileInView={{
                                    scaleY: 1,
                                    transition: {
                                        delay: index * 0.4
                                    }
                                }}
                                viewport={{ once: true, amount: "all" }}

                            >
                                <DoctorCard name={ele.name} image={ele.image} text={ele.text} spec={ele.spec} />
                            </motion.div>
                        )
                    })
                }
            </motion.div>

            <motion.div
                className=' flex justify-center items-center'
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true, amount: "all" }}
            >
                <PrimaryBtn text={"Make an apiontment"} link={"Appointment"} />
            </motion.div>
        </div>
    )
}
