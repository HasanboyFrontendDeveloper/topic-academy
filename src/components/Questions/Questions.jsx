import React, { useState } from 'react'
import { QuestionsCard } from '../'


const items = [
    {
        id: 1,
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?'
    },
    {
        id: 2,
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?'
    },
    {
        id: 3,
        title: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?'
    },
]

const Questions = () => {
    const [active, setActive] = useState(0)


    return (
        <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[1000px] mx-auto pb-20 pt-5' id='questions'>
            <h1 className='sm:text-[50px] text-2xl max-w-[80%] mx-auto mb-8 sm:leading-[50px] font-medium text-center'>Ko’p beriladigan savollar</h1>

            <div className="">

                {items.map((item, index) => (
                    <QuestionsCard item={item} index={index + 1} setActive={setActive} active={active} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Questions