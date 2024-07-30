import logo from '../../assets/imgs/logo.png'

const Footer = () => {
    return (
        <div className='flex flex-wrap gap-5 xs:justify-between xs:items-center bg-gray-900 py-5 px-10 ss:px-20 w-full mx-auto mt-5 '>
            <div className="flex items-center gap-5 ">
                <a href="./">
                    <img src='https://static.tildacdn.info/tild6461-3631-4933-b438-333065383736/logo_horizontal.svg' alt="logo" className='w-20 ' />
                </a>
            </div>
            <div className="flex sm:flex-row flex-col md:text-lg gap-5 lg:text-xl nav_links  ">
                <a href="#whyUs" >Nega biz</a>
                <a href="#results">Natijalar</a>
                <a href="#courses">Kurslar</a>
                <a href="#questions">Savollar</a>
            </div>
            <div className="text-white flex text-2xl gap-6 ">
                <a href="tel:+998333060098">
                    <i className="fa-solid fa-phone"></i>
                </a>
                <a href="https://t.me/Hasanboy_1137">
                    <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer