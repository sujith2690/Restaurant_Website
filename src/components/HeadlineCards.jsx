import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-4 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4 '>Sun'Out, BOGO's Out</p>
                    <p className='px-2 '>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4 '>Valeria Boltneva</p>
                    <p className='px-2 '>New Dish</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4 '>Yummy Desert</p>
                    <p className='px-2'>Sweet and Crunchy</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/7190364/pexels-photo-7190364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          
           
        </div>
    )
}

export default HeadlineCards