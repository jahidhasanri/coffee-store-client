import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto rancho-regular'>
            <div className='relative'>
           <img src="/public/images/cups/Rectangle 2.png" alt="" />

           <div className='absolute lg:mt-[-500px] lg:ml-[850px] lg:mr-[100px]'>
            <h2 className='text-[#FFFFFF] font-normal text-[55px]'>Would you like a Cup of Delicious Coffee?</h2>
            <p className='text-[#FFFFFF] font-normal text-4 mt-3'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn bg-[#E3B577] mt-3'>Learn More</button>
           </div>
            </div>

            <div className=' bg-[#ECEAE3] pt-20 pb-20'>

               <div className='w-9/12 mx-auto grid grid-cols-4 gap-4'>
               <div >
                    <img src="/public/images/icons/1.png" alt="" />
                    <h4 className='font-normal text-4xl'>Awesome Aroma</h4>
                    <h6 className='font-normal text-lg'>You will definitely be a fan of the design & aroma of your coffee</h6>
                </div>
                <div>
                    <img src="/public/images/icons/2.png" alt="" />
                    <h4 className='font-normal text-4xl'>High Quality</h4>
                    <h6 className='font-normal text-lg'>We served the coffee to you maintaining the best quality</h6>
                </div>
                <div>
                    <img src="/public/images/icons/1.png" alt="" />
                    <h4 className='font-normal text-4xl'>Pure Grades</h4>
                    <h6 className='font-normal text-lg'>The coffee is made of the green coffee beans which you will love</h6>
                </div>
                <div>
                    <img src="/public/images/icons/1.png" alt="" />
                    <h4 className='font-normal text-4xl'>Proper Roasting</h4>
                    <h6 className='font-normal text-lg'>Your coffee is brewed by first roasting the green coffee beans</h6>
                </div>
               </div>

            </div>

           

        </div>
    );
};

export default Banner;