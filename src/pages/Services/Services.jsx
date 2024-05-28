import React from 'react'
import { Description } from './Description'
import { services, description } from './data'
import { ServiceCard } from './ServiceCard'
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { PrimaryBtn } from '../About/PrimaryBtn'



export const Services = () => {
    return (
        <div className=' flex flex-col   gap-20'>
            <div>
                <Description title1={description.title1} title2={description.title2} text={description.text} />
            </div>

            <motion.div
                className=' flex flex-wrap gap-10  '
            >
                {
                    services.map((ele, index) => {
                        return (
                            <motion.div
                                key={index}
                                className='flex-1 min-w-[200px]'
                                initial={{ opacity: 0, y: -100, }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.2
                                    }
                                }}
                                viewport={{ once: true, amount: "all" }}
                            >
                                <ServiceCard
                                    key={ele.id}
                                    image={ele.image}
                                    text={ele.text}
                                    title={ele.title}

                                />
                            </motion.div>
                        )
                    })
                }
            </motion.div>

            <motion.div
                className=' flex items-center justify-center'
                initial={{scale:0 }}
                whileInView={{
                    scale:1,
                    transition: {
                        delay:0.2
                    }
                }}
                viewport={{ once: true, amount: "all" }}
            >
                <PrimaryBtn text={"Make an appointment"} link={"Appointment"} />
            </motion.div>
        </div>
    )
}
