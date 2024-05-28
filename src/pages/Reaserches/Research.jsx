import icon1 from './../../Images/medical_icon_cell.png'
import icon2 from './../../Images/medical_icon_doc.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';



export const Research = ({ bg, title1, title2, about1, about2 }) => {



    return (
        <div className=' px-[20px] flex flex-col gap-10 items-center justify-center text-white w-full h-full bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }}>
            <h1
                className=' font-bold text-[2.5rem] text-center overflow-hidden '
                initial={{height:0}}
                animate={{height:"auto"}}
            >
                {title1}
                <span className=' block text-2xl font-semibold '>
                    {title2}
                </span>
            </h1>

            <div className=' flex flex-col md:flex-row gap-12  items-start '>
                <div className=' flex flex-col gap-4 items-center justify-center'>
                    <img className=' size-[100px]' src={icon1} alt="" />
                    <p className=' max-w-[300px] text-center'> {about1} </p>
                </div>
                <div className=' flex flex-col gap-4 items-center justify-center'>
                    <img className=' size-[100px]' src={icon2} alt="" />
                    <p className=' max-w-[300px] text-center'> {about2} </p>
                </div>
            </div>

        </div>
    )
}
