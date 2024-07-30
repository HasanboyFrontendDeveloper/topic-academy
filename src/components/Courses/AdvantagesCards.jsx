import React from 'react'

const AdvantagesCards = ({ title, desc, index }) => {
    return (
        <div className='lg:w-[330px] ss:py-7 ss:px-5 px-2 py-3 rounded-xl shadow-lg shadow-primary '>
            <span className='bg-primary text-2xl ss:text-[45px] ss:p-3 p-2 rounded-lg font-black text-white '>0{index}</span>
            <h1 className='ss:text-2xl ss:py-5 py-2 font-semibold '>{title} </h1>
            <p className='ss:text-lg text-xs font-medium '>{desc}</p>
        </div>
    )
}

export default AdvantagesCards