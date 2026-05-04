
import Image from 'next/image';
import React from 'react';
import Searchbox from './Searchbox';

const Navbar = () => {
    return (
        <div className='flex justify-between max-w-10/12 mx-auto'>

            <div>
                <Image src="/logo.png"
                       alt="logo"
                       width={120}
                       height={120}
                ></Image>
            </div>

           <div>
            <ul>
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
    );
};

export default Navbar;