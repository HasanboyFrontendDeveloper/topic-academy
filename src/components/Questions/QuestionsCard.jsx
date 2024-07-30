import React from 'react'

const QuestionsCard = ({ item, index, setActive, active }) => {

    const isActive = active === index

    return (
        <div className={`border-b py-5 cursor-pointer accordion-item ${isActive && 'active'} `} onClick={() => setActive(isActive ? 0 : index)}>
            <div className="flex justify-between items-center py-2 ">

                <div className="">
                    <h1 className='text-lg ss:text-2xl'>O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</h1>
                </div>
                <div className=" ">
                    <i className={`fa-solid fa-circle-plus text-[50px] text-primary transition duration-500 ${isActive && "rotate-45"}`}></i>
                </div>
            </div>
            <div className={`content relative transition duration-500 h-0 overflow-hidden `}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?</p>
            </div>
        </div>
    )
}

export default QuestionsCard