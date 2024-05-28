import React from 'react'
import { Description } from '../Services/Description'
import { description, items } from './data'
import { Item } from './Item'
import { PrimaryBtn } from '../About/PrimaryBtn'
import { motion } from 'framer-motion'


export const MediaCare = () => {
    return (
        <div className=' flex flex-col gap-20'>
            <div>
                <Description title1={description.title1} title2={description.title2} text={description.text} />
            </div>

            <motion.div className=' flex flex-wrap gap-7 justify-center '>
                {
                    items.map((ele, index) => {
                        return (
                            <motion.div
                                className=' sm:flex-1  ' key={ele.id}
                                initial={{ scale: 0 }}
                                whileInView={{
                                    scale: 1,
                                    transition: {
                                        delay: 0.2 * index,
                                    }
                                }}
                                viewport={{ once: true, amount: "all" }}
                            >
                                <Item title={ele.title} text={ele.text} icon={ele.icon} />
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
                <PrimaryBtn text={"Make an appointment"} link={"Appointment"} />
            </motion.div>
        </div>
    )
}
