import React from 'react'
import { ImageCover } from '../About/ImageCover'
import bg from "./../../Images/medicare_bear.jpg"
import { motion } from 'framer-motion'
import { contacs } from './data'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export const Appiontmnet = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-center items-center gap-20'>
            <ImageCover image={bg} />
            <div className=' flex flex-col items-start gap-5 md:gap-4 max-w-[600px]'>
                <div className=' w-full flex items-center justify-center'>
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
                <h2 className=' text-primary w-full font-semibold text-3xl text-center'>
                    Contact
                </h2>
                <h1 className=' font-bold text-4xl'>
                    For Appiontmnets
                    <span className=' block font-normal text-lg py-4 text-gray-500 '>
                        Aerobic activity antihistamines bacteria blood pressure
                        braces cochlea ct scan or cat scan dandruff
                        decongestants diarrhea emotions.
                    </span>
                </h1>

                <div className='flex flex-col gap-3'>
                    {
                        contacs.map((ele) => {
                            return (
                                <div key={ele.id} className=' text-2xl flex flex-col gap-2 text-primary'>
                                    <h2 className=' font-bold text-2xl'> {ele.name} </h2>
                                    <div className=' flex gap-4 items-center'>
                                        <PhoneInTalkIcon />
                                        <span> {ele.phone} </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className=' text-xl'>
                    <div>
                        MO - Thu : <span className=' font-bold'>8:00 am - 3:00pm</span>
                    </div>
                    <div>
                        Fri : <span className=' font-bold'>9:00 am - 1:00pm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
