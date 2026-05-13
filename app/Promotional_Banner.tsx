"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Promotion = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  link?: string;
};

const Promotional_Banner = () => {
     const [banners,setBanners] = useState<Promotion[]>([]);
    useEffect(()=>{

        axios.get("/promotional_data.json")
        .then(res=>{
            setBanners(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })



    },[])
    return (

        <div className='bg-[#fbf2e9] pb-20'>

            <div className='flex gap-4 w-10/12 mx-auto '>

            {
                banners.map((banner,index)=>{
                    return(
                     <div key={index} className="w-[500px] h-[400px] relative ">
            <Image
                src={banner.image}
                alt={banner.title}
                 fill
                 className="object-cover"
                  />
              </div>
                    )
                })
            }
            
        </div>

        </div>
        
    );
};

export default Promotional_Banner;