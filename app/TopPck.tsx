"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Bebas_Neue } from 'next/font/google';


const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
})

const TopPck = () => {

    const changinggame=()=>{

        if(holder<4){

             setfashions((current)=>current+1);

        }
       
    }


      const changingmatch=()=>{

        if(holder>0){

             setfashions((current)=>current-1);

        }
       
    }
const topPicks = [
  {
    id: 1,
    title: "Streetwear Hoodie",
    image: "https://i.ibb.co.com/Q78rrynQ/hoodie1.png",
    price: 1499,
    category: "Streetwear",
  },
  {
    id: 2,
    title: "Premium Sneakers",
    image: "https://i.ibb.co.com/6RBDVrFN/sneaker3.png",
    price: 2999,
    category: "Footwear",
  },
  {
    id: 3,
    title: "Classic Denim Jacket",
    image: "https://i.ibb.co.com/TBfXbZLZ/jacket2.png",
    price: 2499,
    category: "Outerwear",
  },
  {
    id: 4,
    title: "baggy pant",
    image: "https://i.ibb.co.com/whg7QwzK/pant3.png",
    price: 899,
    category: "Casual Wear",
  },
  {
    id: 5,
    title: "Luxury Leather Watch",
    image: "https://i.ibb.co.com/xSKzpqDL/watch4.png",
    price: 3499,
    category: "Accessories",
  },
];

    const [holder,setfashions]=useState(0);

    useEffect(()=>{

        console.log(topPicks[holder]);

    },[holder])
    return (
        <div className={`${bebasNeue.className} pt-20 bg-[#fbf2e9] text-[#2B2B2B]`}>

          <p className='text-4xl  font-bold text-center'>Top Picks For you</p>

          <div className='flex justify-center pt-14  pb-22'>

                  <div className='flex gap-8 items-center'>

                   {/* <button onClick={changinggame} className='text-red-500 bg-amber-400 px-4 py-3'>change</button> */}

                   <FaRegArrowAltCircleLeft onClick={changingmatch} size={35} className=''  />

         <Image
  src={topPicks[holder].image}
  alt={topPicks[holder].title}
  width={500}
  height={500}
  className="object-cover rounded-2xl"
/>


  <div className=' text-3xl font-bold text-center '>

              <p>{topPicks[holder].title}</p>
                <p>{topPicks[holder].price}</p>
            
            </div>

<FaRegArrowAltCircleRight  onClick={changinggame}  size={35} className='' />


            </div>

          

          </div>

          

         
    
            
        </div>
    );
};

export default TopPck;