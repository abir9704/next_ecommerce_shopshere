import Image from 'next/image';
import React from 'react';

const Maincategory = () => {
    return (
     <div className="mt-20 bg-[#fbf2e9]">

        <div className='mt-10 text-green-600 text-5xl my-10 text-center pt-10'>
            <p>Explore Our best categories</p>
        </div>
  <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-10/12 mx-auto">

    {/* 1 */}
    <div className="relative h-[500px] w-full">
      <Image
        src="/male.jpg"
        alt="male"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* 2 (middle - spans 2 rows) */}
    <div className="relative row-span-2 h-full w-full">
      <Image
        src="/accessor.jpg"
        alt="accessor"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* 3 */}
    <div className="relative h-[500px] w-full">
      <Image
        src="/female.jpg"
        alt="female"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* 4 */}
    <div className="relative h-[500px] w-full">
      <Image
        src="/srs.jpg"
        alt="kid"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* 5 */}
    <div className="relative h-[500px] w-full">
      <Image
        src="/shoes.jpg"
        alt="shoes"
        fill
        className="object-cover rounded-xl"
      />
    </div>

  </div>
</div>
    );
};

export default Maincategory;