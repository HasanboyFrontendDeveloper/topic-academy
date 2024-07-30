import logo from '../../assets/imgs/logo.png'

const Footer = () => {
    return (
        <div className='flex gap-5 justify-between items-center bg-gray-900 py-5 px-10 ss:px-20 w-full mx-auto mt-5 '>
            <div className="flex items-center gap-5 ">
                <a href="./">
                    <img src='https://static.tildacdn.info/tild6461-3631-4933-b438-333065383736/logo_horizontal.svg' alt="logo" className='w-20 ' />
                </a>
            </div>
            <div className="flex sm:flex-row flex-col md:text-lg gap-5 lg:text-xl text-white  ">
                <a href="#whyUs" className='hover:text-primary transition duration-300 ' >Nega biz</a>
                <a href="#results" className='hover:text-primary transition duration-300 ' >Natijalar</a>
                <a href="#courses" className='hover:text-primary transition duration-300 ' >Kurslar</a>
                <a href="#questions" className='hover:text-primary transition duration-300 ' >Savollar</a>
            </div>
            <div className="text-white flex xs:flex-row flex-col text-2xl gap-6 ">
                <a href="tel:+998333060098" className='hover:text-primary transition duration-300 ' >
                    <i className="fa-solid fa-phone"></i>
                </a>
                <a href="https://t.me/Hasanboy_1137" className='hover:text-primary transition duration-300 ' >
                    <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="https://www.instagram.com/" className='hover:text-primary transition duration-300 ' >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/" className='hover:text-primary transition duration-300 ' >
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer