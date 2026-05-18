import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import React from 'react';



const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
})

const DiscoverStyle = () => {
    return (
        <div className={`bg-[#fbf2e9] ${bebasNeue.className} pb-10 text-[#2B2B2B]`}>

            
        <div className='pt-20  text-5xl my-10 text-center '>
            <p>Discover Your Style</p>
        </div>

        <div className='flex md:flex-row flex-col gap-10 w-10/12 mx-auto items-center'>
           <div className='md:w-[900px] w-[600px]'>
             <Image
  src="/r11.jpg"
  width={900}
  height={700}
  alt="brand_story"
  className='rounded-[10px]'
/>
           </div>
           <div>


            <p className='lg:text-[20px] text-[16px] '>
      We bring together fashion from different styles, trends, and inspirations — all in one place. From everyday essentials to statement pieces, our goal is to help you discover fashion that matches your personality.

We believe style is more than just clothing — it’s a way to express confidence, individuality, and lifestyle. That’s why we carefully curate collections that blend comfort, modern trends, and timeless fashion for every occasion.
            </p>

               

              
           </div>
        </div>

        
            
        </div>
    );
};

export default DiscoverStyle;