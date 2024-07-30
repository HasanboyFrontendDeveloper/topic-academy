import React from 'react'

const ResultsCard = ({img, title, style = 'w-72 ss:w-[420px]'}) => {
  return (
    <div className={`relative mx-5 shadow-lg ${style} `}>
      <img src={img} alt="topic" className='' />
      <div className="linerGradient absolute bottom-0 w-full rounded-lg px-5 h-[20%] ">
        <h1 className='sm:text-4xl text-2xl absolute bottom-2 capitalize '>{title}</h1>
      </div>
    </div>
  )
}

export default ResultsCard