
import Image from 'next/image';
import React from 'react';
import Searchbox from './Searchbox';
import { Bebas_Neue } from 'next/font/google';


const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
})


const Navbar = () => {
    return (
        <div className='bg-[#0b493e]'>

               <div className={`flex justify-between items-center max-w-10/12 mx-auto ${bebasNeue.className} text-[#D4AF37] py-4 `}>

            <div>
                <Image src="/abrs.png"
                       alt="logo"
                       width={70}
                       height={70}

                ></Image>
            </div>

           <div>
            <ul className='flex gap-5 cursor-pointer text-[20px]'>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Homedecor</li>
            </ul>
           </div>
           <div>

             <Searchbox></Searchbox>
              
           </div>

          

           {/* <div>
               <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
           </div>
             */}
        </div>

        </div>
       
    );
};

export default Navbar;