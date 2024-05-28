import React from 'react'
import img1bout1 from "./../../Images/medicare_about1.jpg"
import { ImageCover } from './ImageCover'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { PrimaryBtn } from './PrimaryBtn';

export const About = () => {

    const carcters = [
        "Arthritis astringents bronchoconstriction cerebral cortex",
        "Astringents blackhead blood glucose meter",
        "Abdominals biopsy cerumen constipation",
        "Body type bone marrow certified diabetes educators"
    ];

    return (
        <div className=' flex flex-col md:flex-row justify-center items-center gap-20'>
            <ImageCover image={img1bout1} />
            <div className=' flex flex-col items-start gap-7 max-w-[600px]'>
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
                <h2 className=' text-primary font-semibold text-3xl  w-full text-center'>
                    Welcome to Medicare
                </h2>
                <h1 className=' font-bold text-4xl'>
                    Why Visit us?
                    <span className=' block font-semibold '>Our Modern Facilities</span>
                </h1>
                <p className=' text-gray-600'>
                    Aerobic activity antihistamines bacteria blood pressure
                    braces cochlea ct scan or cat scan dandruff
                    decongestants diarrhea emotions.
                </p>
                <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.3 }} viewport={{ once: true, amount: "all" }} className=' flex flex-col gap-2'>
                    {
                        carcters.map((ele, index) => {
                            return (
                                <motion.div
                                    key={index} className=' flex gap-2 items-center text-primary '
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                        },
                                        visible: {
                                            opacity: 1
                                        }
                                    }}
                                >
                                    <CheckCircleIcon />
                                    <span className=' block'> {ele}. </span>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>

                <motion.div
                    className=' flex justify-center '
                    initial={{scale:0}}
                    animate={{scale:1,transition:{delay:1.3}}}
                    viewport={{once:true,amount:"all"}}
                >
                    <PrimaryBtn text={"Treatment"} link={"Treatment"} />
                </motion.div>
            </div>
        </div>
    )
}
