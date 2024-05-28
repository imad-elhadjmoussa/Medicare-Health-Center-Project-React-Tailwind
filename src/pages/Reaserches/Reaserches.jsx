import React, { useState } from 'react'
import { reaserches } from './data'
import { Research } from './Research'
import arrowRigth from './images/iconmonstr-angel-right-circle-thin.svg'
import arrowLeft from './images/iconmonstr-angel-left-circle-thin.svg'

export const Reaserches = () => {

    const [current, setCurrent] = useState(reaserches[0]);

    const rightArrowOnClick=()=>{
        if(current.id === 3){
            setCurrent(reaserches[0]);
        }else{
            setCurrent(reaserches[current.id+1])
        }
    }

    const leftArrowOnClick=()=>{
        if(current.id === 0){
            setCurrent(reaserches[reaserches.length-1]);
            console.log(current.id)
        }else{
            setCurrent(reaserches[current.id-1])
        }

    }


    return (
        <div  className=' w-screen h-[150vh] relative  '>
            <Research bg={current.bg} about1={current.about1} about2={current.about2} title1={current.title1} title2={current.title2} />

            <div onClick={()=>{rightArrowOnClick()}} className=' absolute top-[50%] right-[20px] md:right-[60px] cursor-pointer '>
                <img className=' size-10 font-bold' src={arrowRigth} alt="hhh" />
            </div>

            <div onClick={()=>{leftArrowOnClick()}} className=' absolute top-[50%] left-[20px] md:left-[60px] cursor-pointer '>
                <img className=' size-10 font-bold' src={arrowLeft} alt="hhh" />
            </div>
        </div>
    )
}
