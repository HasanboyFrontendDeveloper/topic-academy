import { useState } from 'react';

import { useCountries } from "use-react-countries";
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const Contact = () => {
    const [phone, setPhone] = useState('998 ');

    const { countries } = useCountries();
    const [country, setCountry] = useState(0);
    const { name, flags, countryCallingCode } = countries[country];
    return (
        <div className=' xl:w-[1200px] sm:w-[80%] w-[90%] mx-auto py-5 md:px-20 rounded-3xl  bg-gradient-to-r from-teal-200 to-teal-100 '>
            <div className=" mx-auto flex justify-between ss:flex-row flex-col xs:items-center gap-5 p-5  ">
                <div className="">
                    <h1 className='text-4xl max-w-[230px] '>Savollaringiz qoldimi? </h1>
                    <p className='max-w-[230px] text-base '>Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
                </div>
                <form className="ss:w-[300px] w-full xs:w-[70%] ">
                    <input type="text" placeholder='Ismingiz' className='py-4 px-5 outline-none placeholder:text-gray-600 rounded-full bg-secondary w-full ' />
                    <input type="text" placeholder='Ismingiz' className=' mt-2 mb-5 py-4 px-5 outline-none placeholder:text-gray-600 rounded-full bg-secondary w-full ' />
                    <button href="#" className=' uppercase inline-block text-base bg-primary hover:bg-white hover:text-primary border border-primary duration-500 rounded-full py-6 px-12  w-full font-bold text-white ' >savol berish</button>

                </form>

                {/* <div className="relative flex w-full max-w-[24rem] bg-secondary rounded-full py-3 px-2 ">
                        <Menu placement="bottom-start">
                            <MenuHandler>
                                <Button
                                    ripple={false}
                                    variant="text"
                                    color="blue-gray"
                                    className="flex h-10 items-center gap-2 rounded-r-none border-none  pl-3"
                                >
                                    <img
                                        src={flags.svg}
                                        alt={name}
                                        className="h-4 w-4 rounded-full object-cover"
                                    />
                                    {countryCallingCode}
                                </Button>
                            </MenuHandler>
                            <MenuList className="max-h-[20rem] max-w-[18rem]">
                                {countries.map(({ name, flags, countryCallingCode }, index) => {
                                    return (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            className="flex items-center gap-2"
                                            onClick={() => setCountry(index)}
                                        >
                                            <img
                                                src={flags.svg}
                                                alt={name}
                                                className="h-5 w-5 rounded-full object-cover"
                                            />
                                            {name} <span className="ml-auto">{countryCallingCode}</span>
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                        <Input
                            type="tel"
                            placeholder="Mobile Number"
                            className="rounded-l-none border-none focus:border-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            containerProps={{
                                className: "min-w-0",
                            }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div> */}
            </div>
        </div>
    )
}

export default Contact