
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function UpFooter() {
    useEffect(() => {
     
        AOS.init({duration:2000});
     
    }, [])
    return (
        <div   className=''>
            <div   className=' flex justify-center '>
                <h1 className='md:text-2xl text-xl font-radio font-semibold'>
                    World's leading chain of hotels and homes
                </h1>
            </div >
            <div className=' flex justify-center md:text-xl text-sm py-16'>
                <h2>
                    More Destinations. More Ease. More Affordable.
                </h2>
            </div>
            <div className=' font-medium'>
                <div className=' flex justify-center'>
                    <div>
                        <h1>
                            35<sapn>Countries+</sapn>
                        </h1>
                    </div>

                </div>

                <div className=' flex justify-center'>
                    <div>
                        <h1>
                            157,000+<sapn>Hotels & Homes</sapn>
                        </h1>
                    </div>
                </div>
            </div>

            <div className='flex justify-center space-x-36 gap-44 py-16 font-semibold '>
                <ul className=' grid-cols-3 list-disc md:block  sm:hidden '>
                    <li>
                        India
                    </li>
                    <li>
                        China
                    </li>
                    <li>
                        Malaysia
                    </li>
                </ul>
                <ul className=' grid-cols-3 list-disc'>

                    <li>
                        Indonesia
                    </li>
                    <li>
                        UAE
                    </li>
                    <li>
                        Nepal
                    </li>
                </ul>
            </div>
            <div className='flex justify-center font-radio  text-xl'>
                <div className='md:block sm:hidden'>
                    <div className='justify-start' >
                        <h1 className=' '>
                            World's leading chain of hotels and homes
                        </h1>
                    </div>
                    <div className='flex'>
                        <h1 className='py-1 md:text-xl '>
                            Join our network and grow your business!
                        </h1>

                        <div>
                            <h1 className='bg-white   md:text-xl border-2 p-1  rounded-md  hover:bg-blue-700 hidden md:block'>List your Property</h1>
                        </div>


                    </div>


                </div>


            </div>
            <div class="py-4">
                <div class="w-full border-t-2 border-black"></div>
            </div>
            <div>

            </div>
            <div>
                <div  data-aos="fade-right"  className='flex justify-center' >
                   
                        <div className='sm:text-xl   md:text-5xl space-x-5   grid grid-flow-col-dense animate-headShake'>
                            <span className='text-green-600'><ion-icon name="logo-whatsapp"></ion-icon> </span>
                            <span className='text-red-600'><ion-icon name="logo-youtube"></ion-icon> </span>
                            <span className='text-sky-500'><ion-icon name="logo-twitter"></ion-icon> </span>
                            <span className='text-pink-500'><ion-icon name="logo-instagram"></ion-icon> </span>
                            <span className='text-red-600'><ion-icon name="logo-pinterest"></ion-icon> </span>
                        </div>
                   
                    {/* <div className='flex sm:hidden   md:block'>
                        <h1 className='bg-black  text-white  rounded-md  md:text-xlp-1 p-3   '>Get it on Google Play</h1>

                    </div>

                    <div className='flex  sm:hidden   md:block'>
                        <h1 className='bg-black  text-white  rounded-md  md:text-xlp-1 p-3   sm:hidden   md:block'>Get it on App Store</h1>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default UpFooter