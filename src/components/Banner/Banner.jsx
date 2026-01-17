import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto mt-10 px-4 my-4">
            <div className="bg-base-300 rounded-3xl p-8 md:p-12 lg:p-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    {/* বাম পাশের টেক্সট সেকশন (৫০% জায়গা নেবে) */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold font-playfair text-base-content leading-tight">
                            Books to freshen up <br className="hidden lg:block" /> your bookshelf
                        </h1>
                        
                        <button className="btn bg-main text-white border-none font-work font-bold px-8 py-3 text-lg hover:bg-main/90 transition-transform hover:scale-105 rounded-lg">
                            View The List
                        </button>
                    </div>

                    {/* ডান পাশের ছবির সেকশন (৫০% জায়গা নেবে) */}
                    <div className="flex-1 flex justify-center lg:justify-end items-center h-full">
                        <img
                            src="../../../public/img/boi-removebg-preview.png"
                            alt="Book Cover"
                            // এখানে পরিবর্তন করা হয়েছে 👇
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </div>
        
    );
};

export default Banner;