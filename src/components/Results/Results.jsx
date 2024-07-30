import React from 'react'
import { ResultsCard } from '../'

const cardsReverse = [
  {
    title: 'topic 5',
    img: 'https://optim.tildacdn.pub/tild6333-3934-4464-b164-663263616132/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 5',
    img: 'https://optim.tildacdn.pub/tild3664-3961-4661-b330-383362633964/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 5',
    img: 'https://optim.tildacdn.pub/tild3939-3739-4732-b734-656133613035/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 6',
    img: 'https://optim.tildacdn.pub/tild3332-3135-4034-b965-613430363666/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 6',
    img: 'https://optim.tildacdn.pub/tild3734-3062-4339-b936-323936656136/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 3',
    img: 'https://optim.tildacdn.pub/tild3839-6463-4138-b637-336237633430/-/resize/654x/-/format/webp/photo_2023-01-29_10-.jpg'
  },
  {
    title: 'topic 3',
    img: 'https://optim.tildacdn.pub/tild6165-3039-4631-a531-333063353236/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
]

const Results = ({cards}) => {
  return (
    <div className='py-5 ' id='results' >
      <h1 className='sm:text-[50px] text-2xl pb-5 text-center ss:max-w-max max-w-[80%] mx-auto ' >O’quvchilarimizning natijalari TOPIK 6 gacha</h1>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex ">
          {cards.map((item, index) => (
            <ResultsCard {...item} key={index} />
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex ">
          {cards.map((item, index) => (
            <ResultsCard {...item} key={index} />
          ))}
        </div>
      </div>

      <div className="relative md:flex overflow-x-hidden hidden  ">
        <div className="py-12 animate-marqueeReverse whitespace-nowrap flex ">
          {cardsReverse.map((item, index) => (
            <ResultsCard {...item} key={index} />
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marqueeReverse2 whitespace-nowrap flex ">
          {cardsReverse.map((item, index) => (
            <ResultsCard {...item} key={index} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default Results