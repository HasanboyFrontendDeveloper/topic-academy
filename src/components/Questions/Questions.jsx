import React from 'react'
import { QuestionsCard } from '../'

const Questions = () => {
    return (
        <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[1000px] mx-auto pb-20 pt-5'>
            <h1 className='sm:text-[50px] text-2xl max-w-[80%] mx-auto mb-8 sm:leading-[50px] font-medium text-center'>Ko’p beriladigan savollar</h1>

            <QuestionsCard />

        </div>
    )
}

export default Questions