import React from 'react'

export const ServiceCard = ({ image, title, text }) => {
    return (
        <div className=' bg-primary h-full    flex flex-col cursor-pointer gap-3 text-white rounded-sm'>
            <div >
                <img className=' rounded-t-sm h-[230px] w-full bg-cover '  src={image} alt={title} />
            </div>
            <div className=' flex flex-col gap-5 p-9'>
                <h1 className=' font-bold text-3xl '>
                    {title}
                </h1>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
