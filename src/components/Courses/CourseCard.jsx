
const CourseCard = ({ img, title, price, desc }) => {
    return (
        <div className='sm:w-[380px] w-[300px] rounded-3xl bg-gray-100 flex flex-col justify-between '>
            <div className="">
                <img src={img} alt="picture " />
            </div>

            <div className="px-5 pb-5 ">
                <div className="flex justify-between items-center">
                    <h1 className='sm:text-2xl text-lg font-semibold '>{title}</h1>
                    <span className='p-2 rounded-full text-white sm:text-xs text-[10px] bg-primary '>Davomiyligi: 5 oy</span>
                </div>
                <p className='py-5 sm:text-lg ' >{desc.first} <span>{desc.highlight}</span> {desc.third} </p>
            </div>
            <div className=" px-5 pb-5  flex justify-between items-center ">
                <a href="#contacts" className=' uppercase inline-block sm:text-sm text-[10px] bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-2 px-4 font-bold text-white ' >Ro'yxatdan O'tish</a>
                <span className='text-primary sm:text-xl text-sm font-semibold '>{price} so’m /oy</span>
            </div>
        </div>
    )
}

export default CourseCard