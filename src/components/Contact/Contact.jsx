import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [value, setValue] = useState({
        name: "",
        phone: "+998"
    });
    const [isLoading, setIsLoading] = useState(false)

    const handleValue = (e) => {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setIsLoading(true)

        const token = '7280555438:AAEJNC-fuCsVb4nlvegqE60daOiW90gBmTs';
        const chat_id = 1077786876
        const url = `https://api.telegram.org/bot${token}/sendMessage`

        const message = `
        Fullname: ${value.name};
        Phone: ${value.phone};
      `

      axios({
        url,
        method: "POST",
        data: {
            chat_id: chat_id,
            text: message
        }
    })
        .then(() => {
            setValue({
                name: '',
                phone: '+998'
            })
            toast.success('Send Successfully', {
                theme: 'light',
            })
        })

        .catch(err => {
            console.error("Yuborishda hatolik", err),
                toast.error('Nimadir Xato', {
                    theme: 'dark',
                })

        }).finally(() => setIsLoading(false))

    }

    return (
        <div className=' xl:w-[1200px] sm:w-[80%] w-[90%] mx-auto py-5 md:px-20 rounded-3xl  bg-gradient-to-r from-teal-200 to-teal-100 '  id='contacts'>
            <div className=" mx-auto flex justify-between ss:flex-row flex-col xs:items-center gap-5 p-5  ">
                <div className="">
                    <h1 className='text-4xl max-w-[230px] '>Savollaringiz qoldimi? </h1>
                    <p className='max-w-[230px] text-base '>Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
                </div>
                <form className="ss:w-[300px] w-full xs:w-[70%] " onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder='Ismingiz'
                        className='py-4 px-5 outline-none placeholder:text-gray-600 rounded-full bg-secondary w-full '
                        onChange={handleValue}
                        name='name'
                        value={value.name}
                    />
                    <input
                        type="tel"
                        placeholder='+998 12 345 67 89'
                        className=' mt-2 mb-5 py-4 px-5 outline-none placeholder:text-gray-600 rounded-full bg-secondary w-full '
                        onChange={handleValue}
                        name='phone'
                        value={value.phone}
                    />
                    <button type='submit' className=' uppercase inline-block text-base bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-6 px-12  w-full font-bold text-white ' disabled={isLoading} >{isLoading ? 'jonatilmoqda...' : 'savol berish'}</button>

                </form>
            </div>
        </div>
    )
}

export default Contact