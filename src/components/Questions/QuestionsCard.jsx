import React from 'react'

const QuestionsCard = ({ item, index, setActive, active }) => {

    const isActive = active === index

    return (
        <div className={`border-b py-5 cursor-pointer accordion-item ${isActive && 'active'} `} onClick={() => setActive(isActive ? 0 : index)}>
            <div className="flex justify-between items-center py-2 ">

                <div className="">
                    <h1 className='text-lg ss:text-2xl'>{item.title}</h1>
                </div>
                <div className=" ">
                    <i className={`fa-solid fa-circle-plus text-[50px] text-primary transition duration-500 ${isActive && "rotate-45"}`}></i>
                </div>
            </div>
            <div className={`content relative transition duration-500 h-0 overflow-hidden `}>
                <p>{item.content}</p>
            </div>
        </div>
    )
}

export default QuestionsCard