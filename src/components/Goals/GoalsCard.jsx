
const GoalsCard = ({ img, title }) => {
    return (
        <div className='flex flex-col items-center gap-5 py-5 '>
            <div className="bg-secondary rounded-full w-32 ss:w-52 p-6 ">
                <img src={img} alt="icon" className='w-full ' />
            </div>
            <h1 className='text-center text-sm ss:text-2xl max-w-[80%] '>{title.first} <span className="text-primary">{title.highlight} </span>{title.third}</h1>
        </div>
    )
}

export default GoalsCard