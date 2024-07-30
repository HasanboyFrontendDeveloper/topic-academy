import mainimg from '../../assets/imgs/mainimg.png'
import svg1 from '../../assets/imgs/decoration.svg'

const Header = () => {
    return (
        <div className='relative overflow-hidden '>
            <div className="w-[95%] sm:w-[90%] md:w-[98%] xl:w-[1400px] mx-auto  py-5">

                <div className="flex items-center my-1 lg:my-5 gap-5 ">
                    <div className="sm:w-10 w-5 h-[1px] bg-secondary"></div>
                    <h1 className='ss:text-xl md:text-2xl text-sm '>3 oyda Koreys tilida gapirishni boshlang</h1>
                </div>
                <h1 className=' text-[22px] ss:text-[53px] lg:text-[61px]  max-w-full ss:max-w-[800px] lg:max-w-[900px] py-5 '>Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati</h1>
                <div className="flex flex-col-reverse md:flex-row py-8 gap-12 md:pb-8 md:pt-4  md:gap-7 lg:py-8 lg:gap-12 mb-[-10%] ss:mb-0 ">
                    <div className="flex gap-5 items-center ">
                        <img src={svg1} alt="decoration" className='sm:w-8 w-4 ' />
                        <p className='sm:text-2xl md:text-xl max-w-60 font-light ' >5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                    </div>
                    <div className="flex gap-5 items-center ">
                        <img src={svg1} alt="decoration" className='sm:w-8 w-4 ' />
                        <p className='sm:text-2xl md:text-xl max-w-[340px] font-light ' >Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                    </div>
                </div>
                <div className="">
                    <img src={mainimg} alt="main img" className='w-[1200px] ml-[30px] sm:ml-[100px] ss:absolute ss:right-[-300px] ss:bottom-20 md:bottom-[-160px] md:right-[-230px] lg:top-0 lg:right-[-130px] ' />
                </div>
                <div className="md:mt-12 md:mb-4 ss:block flex flex-col justify-center items-center  ">
                    <a href="#" className=' uppercase inline-block text-base ss:text-xl bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-4 ss:py-8 px-12 ss:px-16 w-80 ss:w-auto font-bold text-white ' >bepul darsga yoziling</a>
                    <h3 className='ss:pl-16 py-3  '>Birinchi darsga bepul yoziling!</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Header