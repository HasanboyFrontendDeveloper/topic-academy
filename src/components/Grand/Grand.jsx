import scholarship from '../../assets/imgs/scholarship.png'
import { ResultsCard } from '../'

const Grand = ({ cards }) => {
    return (
        <div className='py-5 mb-20 '>
            <h1 className='sm:text-[50px] text-2xl text-center ss:max-w-[70%] max-w-[80%] mx-auto ss:leading-[50px] '>Koreya Universitetlariga 100% gacha grant yutish imkoniyati</h1>
            <div className="sm:flex sm:gap-10 py-16 ">
                <div className="max-w-[80%] sm:max-w-max mx-auto mb-10 ">
                    <img src={scholarship} alt="scholarship" />
                </div>
                <div className="md:max-w-[70%] sm:max-w-[50%] w-[90%] mx-auto ">

                    <div className="pb-10 ">
                        <h1 className='text-3xl pb-5 text-center '>GKS (Global Korean Scholarship) <span className='text-secondary'>$70.000</span> lik Grant</h1>
                        <p className='text-xl leading-8'>Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className='text-primary'>xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className='text-primary'>100% gacha to’liq grant</span> <br /> va oylik <span className='text-primary'>stipendiya</span> olish imkoniyatingiz bor</p>
                    </div>

                    <div className="">
                        <h1 className='text-3xl pb-5 text-center '>GKS (Global Korean Scholarship) <span className='text-secondary'>$70.000</span> lik Grant</h1>
                        <ul className='list-disc text-xl leading-8 font-medium '>
                            <li>
                                <p className=''>Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</p>
                            </li>
                            <li>
                                <p className=''>Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</p>
                            </li>
                            <li>
                                <p className=''>Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className='text-secondary'>ko’proq</span> </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className='md:text-[50px] ss:text-4xl text-2xl font-semibold pb-16 text-center ss:max-w-[70%] max-w-[80%] mx-auto ss:leading-[50px]'>Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz</h1>

            <div className="flex gap-16 w-[95%] mx-auto sm:w-[90%] sm:ml-auto sm:mr-0 ">
                <div className="">
                    <h1 className='text-2xl font-light leading-10 sm:max-w-max '><span className='text-primary'>TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</h1>
                    <p className='pt-20 mb-10 font-medium'>Ko’proq ma’lumot olish uchun <br /> bepul konsultatsiyaga yoziling!</p>
                    <a href="#" className=' uppercase inline-block text-base ss:text-xl bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-4 px-12 max-w-[90%] w-80 ss:max-w-max ss:w-auto font-bold text-white ' >Ariza Qoldirish</a>
                </div>

                <div className="relative sm:flex overflow-hidden hidden ">
                    <div className="animate-marqueeReverse whitespace-nowrap flex ">
                        {cards.map((item, index) => (
                            <div className="" key={index} >
                                <ResultsCard {...item} style='w-[250px] h-[350px] ' />
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0  animate-marqueeReverse2 whitespace-nowrap flex ">
                        {cards.map((item, index) => (
                            <div className="" key={index} >
                                <ResultsCard {...item} style='w-[250px] h-[350px]' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grand