import { GoalsCard } from "../"
import chat from '../../assets/imgs/chat.png'
import key from '../../assets/imgs/key.png'
import money from '../../assets/imgs/money.png'
import rocket from '../../assets/imgs/rocket.png'
import target from '../../assets/imgs/target.png'
import travel from '../../assets/imgs/travel.png'

const cards = [
    {
        title: {
            first: "",
            highlight: "Qisqa",
            third: "muddat ichida Koreys tilida gapirishni istaysiz",
        },
        img: chat,
    },
    {
        title: {
            first: "Koreys tili o’rganib o’z",
            highlight: "karyerangizni",
            third: "qurmoqchisiz",
        },
        img: rocket,
    },
    {
        title: {
            first: "Topik sertifikatini olib Koreyaning nufuzli universitetlariga",
            highlight: "GRANT",
            third: "yutmoqchisiz",
        },
        img: money,
    },
    {
        title: {
            first: "Janubiy Koreya davlatida",
            highlight: "o’qish va ishlash",
            third: "uchun ketmoqchisiz",
        },
        img: travel,
    },
    {
        title: {
            first: "Koreys tilini o’rta darajda bilasiz va darajangizni",
            highlight: "oshirmoqchisiz",
            third: "",
        },
        img: target,
    },
    {
        title: {
            first: "Ko’p yillardan buyon o’qib ham ",
            highlight: "natijaga",
            third: "chiqa olmayapsiz",
        },
        img: key,
    },
]

const Goals = () => {
    return (
        <div className="w-[95%] sm:w-[90%] xl:w-[1400px] mx-auto flex flex-col justify-center " >
            <h1 className="text-2xl ss:text-4xl py-16 text-center ">TOPIK academy aniq siz uchun agar siz:</h1>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8">

                {cards.map((item, index) => (
                    <GoalsCard {...item} key={index} />
                ))}

            </div>
            <div className="mx-auto">

                <a href="#" className='uppercase inline-block text-xl bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-8 px-16 my-5 font-bold text-white ' >ha, bu men</a>
            </div>

        </div>
    )
}

export default Goals