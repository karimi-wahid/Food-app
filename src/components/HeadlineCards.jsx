import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Egg with Potato</p>
                <p className='px-2'>Price: 10$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600'>Order Now</button>
            </div>
            <img
             className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=400' 
             alt='/' />
        </div>

        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Burger</p>
                <p className='px-2'>Price: 15$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600'>Order Now</button>
            </div>
            <img
             className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
             alt='/' />
        </div>

        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Pizza</p>
                <p className='px-2'>Price: 30%</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600'>Order Now</button>
            </div>
            <img
             className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
             src='https://images.pexels.com/photos/18912713/pexels-photo-18912713/free-photo-of-pizza-with-mozzarella-shaped-as-ghosts-for-halloween.jpeg?auto=compress&cs=tinysrgb&w=400' 
             alt='/' />
        </div>
    </div>
  )
}

export default HeadlineCards