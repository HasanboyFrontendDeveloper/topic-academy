import React from 'react'
import { Contact, Courses, Footer, Goals, Grand, Header, Navbar, Questions, Results } from '../'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const resultCards = [
  {
    title: 'topic 5',
    img: 'https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg'
  },
  {
    title: 'topic 5',
    img: 'https://optim.tildacdn.pub/tild3836-3864-4939-b163-626337636333/-/resize/654x/-/format/webp/asadbek_page-0001.jpg'
  },
  {
    title: 'topic 6',
    img: 'https://optim.tildacdn.pub/tild3533-3038-4539-a530-646363633437/-/resize/654x/-/format/webp/11111.jpg'
  },
  {
    title: 'topic 3',
    img: 'https://optim.tildacdn.pub/tild3133-6638-4766-b736-356166643839/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 4',
    img: 'https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg'
  },
  {
    title: 'topic 4',
    img: 'https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/654x/-/format/webp/noname_page-0001_.jpg'
  },
  {
    title: 'topic 6',
    img: 'https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/654x/-/format/webp/noname_12_page-0001.jpg'
  },
]


const Home = () => {
  return (
    <div className='max-w-[1600px] mx-auto '>
      <Navbar />
      <Header />
      <Goals />
      <Results cards={resultCards} />
      <Grand cards={resultCards} />
      <Courses />
      <Questions />
      <Contact />
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default Home