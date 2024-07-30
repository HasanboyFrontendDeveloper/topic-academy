import logo from '../../assets/imgs/logo.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-[95%] sm:w-[90%] md:w-[95%] xl:w-[1400px] mx-auto '>
            <div className="flex items-center gap-5 ">
                <a href="./">
                    <img src={logo} alt="logo" className='xs:w-52 md:w-44 w-28 ' />
                </a>
                <h1 className='sm:max-w-44 max-w-36 pt-4 hidden xs:block text-sm  '>Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</h1>
            </div>
            <div className=" hidden md:flex md:text-lg gap-5 lg:text-xl nav_links  ">
                <a href="#whyUs" >Nega biz</a>
                <a href="#results">Natijalar</a>
                <a href="#courses">Kurslar</a>
                <a href="#questions">Ko'p beriladigon savollar</a>
            </div>
            <div className="">
                <a href="tel:+998333060098" className='lg:text-2xl sm:text-xl md:text-base text-base font-semibold ' >+998 (33) 306 0098 </a>
                <h1 className='lg:text-2xl sm:text-xl md:text-[18px] text-center ' >Hoziroq bog'laning</h1>
            </div>
        </nav>
    )
}

export default Navbar