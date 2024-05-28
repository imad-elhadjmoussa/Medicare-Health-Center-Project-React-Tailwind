import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { scrollToSection } from '../navbar/data';


export const PrimaryBtn = ({text,link}) => {
    return (

        <button
            className=' text-lg flex bg-primary text-white items-center gap-4 font-bold  rounded-sm px-10 py-3  '
            whileHover={{
                gap: "20px",
                transition: {
                    duration: 0.2,
                }
            }}
            onClick={()=>{scrollToSection(link)}}
        >
            <span className=' block'>
                {text}
            </span>
            <span className=' block'>
                <ArrowRightIcon  />
            </span>
        </button>

    )
}
