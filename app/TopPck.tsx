"use client";
import React, { useEffect, useState } from 'react';

const TopPck = () => {

    const changinggame=()=>{

        if(holder<2){

             setfashions((current)=>current+1);

        }
       
    }
    const picks=[
        {
            title:"tshirt",
        },
        {
            title:"shoes",
        },
        {
            title:"bags",
        }
    ]

    const [holder,setfashions]=useState(0);

    useEffect(()=>{

        console.log(picks[holder]);

    },[holder])
    return (
        <div className='flex justify-center pt-10 pb-10'>

            <div>

                   <button onClick={changinggame} className='text-red-500 bg-amber-400 px-4 py-3'>change</button>

            <p className='text-center'>{picks[holder].title}</p>


            </div>

         
    
            
        </div>
    );
};

export default TopPck;