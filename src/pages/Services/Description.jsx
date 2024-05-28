import React from 'react'

export const Description = ({title1,title2,text}) => {
    return (
        <div className=' flex flex-col gap-10 text-center md:flex-row md:text-start md:justify-center md:items-center'>
            <h1 className=' font-bold text-4xl '>
                {title1}
                <span className=' block font-semibold text-3xl py-4'>
                    {title2}
                </span>
            </h1>
            <p className=' text-gray-600 lg:max-w-[800px] max-w-[700px]'>
                {text}
            </p>
        </div>
    )
}
