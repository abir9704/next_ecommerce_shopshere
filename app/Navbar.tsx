import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div>

            <div>
                <Image src="/logo.png"
                       alt="logo"
                       width={120}
                       height={120}
                ></Image>
            </div>

           <div>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
            </ul>
           </div>
            
        </div>
    );
};

export default Navbar;