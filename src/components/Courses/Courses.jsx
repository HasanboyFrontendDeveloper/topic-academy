import React from 'react'
import { AdvantagesCards, CourseCard } from '../'

import mainimg from '../../assets/imgs/mainimg.png'
import course2 from '../../assets/imgs/course2.webp'
import course3 from '../../assets/imgs/course3.webp'


const courseCards = [
    {
        title: 'Intiensive',
        desc: {
            first: '',
            highlight: 'Koreys tilini',
            third: 'chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.',
        },
        price: '970.000',
        img: mainimg
    },
    {
        title: 'Odatiy',
        desc: {
            first: 'Haftada',
            highlight: '3 kun 1.5 soatdan',
            third: 'iborat odatiy Koreys tili darslari.',
        },
        price: '560.000',
        img: course2
    },
    {
        title: 'Individual',
        desc: {
            first: 'O’qituvchidan',
            highlight: 'individual',
            third: 'dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv .',
        },
        price: '1.800.000 ',
        img: course3
    },
]

const advantagesCards = [
    {
        title: 'Professional ustozlar',
        desc: "Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo'lgan o'qituvchilar dars beradi"
    },
    {
        title: 'Bepul coworking zonalari',
        desc: "Erkin dars qilish, netvorking va o'z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud"
    },
    {
        title: 'Haftalik tadbirlar',
        desc: "TOPIK acdemy jamoasi o'quvchilari uchun doimiy ravishda qo'shimcha tadbirar tashkilb keladi"
    },
    {
        title: 'Bepul sinov imtihonlari',
        desc: "Har davomida tashkillanadigan sinov imtihonlarida qatnashib o'z darajangizni bilib borasiz"
    },
    {
        title: 'Yordamchi kuratorlar',
        desc: "Darslarni o'zlashtirishda qiyinchilik bo'lsa sizga yordam beradigan kuratoringiz bo'ladi"
    },
    {
        title: 'Konsulting xizmatlar',
        desc: "Muvafaqqiyatli bitirgan talabalarimizga Janubiy Koreyada o'qish uchun visa olishda, universitet tanlash va grand yutishda yordam beramiz"
    },
]

const Courses = () => {
    return (
        <>

            <div className='w-[95%] sm:w-[90%] md:w-[80%] xl:w-[1400px] mx-auto py-5' id='courses' >
                <h1 className='sm:text-[50px] text-2xl max-w-[80%] mx-auto mb-8 sm:leading-[50px] font-medium text-center'>O’zingizga mos kursga ro’yxatdan o’ting</h1>

                <div className="flex flex-wrap  justify-center gap-5 mb-20 ">
                    {courseCards.map(item => (
                        <CourseCard {...item} key={item.title} />
                    ))}
                </div>
            </div>

            <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[1200px] mx-auto pb-20 pt-5' id='whyUs' >

                <h1 className='sm:text-[50px] text-2xl max-w-[80%] mx-auto mb-8 sm:leading-[50px] font-medium text-center py-8 '>Nima uchun aynan TOPIK academy?</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[] ">
                    {advantagesCards.map((item, index) => (
                        <AdvantagesCards {...item} index={index + 1} key={index} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Courses