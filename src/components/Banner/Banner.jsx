import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto mt-10 px-4 mb-4">
            <div className="bg-base-300 rounded-3xl p-8 md:p-20 lg:p-28">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    
                    {/* বাম পাশের টেক্সট এবং বাটন */}
                    <div className="flex-1 space-y-8 text-center lg:text-left w-[50%]">
                        <h1 className="text-4xl md:text-6xl font-bold font-playfair text-base-content leading-tight">
                            Books to freshen up <br className="hidden lg:block" /> your bookshelf
                        </h1>
                        
                        <button className="btn bg-primary text-white border-none font-work font-bold px-8 py-3 text-lg hover:bg-primary/90 transition-transform hover:scale-105 rounded-lg">
                            View The List
                        </button>
                    </div>

                    {/* ডান পাশের বইয়ের ছবি */}
                    <div className="flex-1 flex justify-center lg:justify-end ">
                        <img 
                            // এখানে আপনার বইয়ের ছবির লিংক দিন
                            src="../../../public/img/boi-removebg-preview.png" 
                            alt="Book Cover" 
                            // className=" md:w-64 lg:w-80 rounded-md object-contain drop-shadow-2xl "
                            className='w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain drop-shadow-2xl'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;