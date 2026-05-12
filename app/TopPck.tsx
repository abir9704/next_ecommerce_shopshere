"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TopPck = () => {

    const changinggame=()=>{

        if(holder<4){

             setfashions((current)=>current+1);

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
        <div className='flex justify-center pt-10 pb-10'>

            <div>

                   <button onClick={changinggame} className='text-red-500 bg-amber-400 px-4 py-3'>change</button>

         <Image
  src={topPicks[holder].image}
  alt={topPicks[holder].title}
  width={500}
  height={500}
  className="object-cover rounded-2xl"
/>


            </div>

         
    
            
        </div>
    );
};

export default TopPck;