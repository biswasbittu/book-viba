import React from 'react';
import { use } from 'react';
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    // const book=use(bookPromise)
    console.log(book)
    const { image, tags, bookName, author,category,rating } = book
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className='bg-base-300 p-4 rounded-lg'>
                    <img
                        className='w-24 md:w-48 p-4 rounded-lg'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-actions justify-start">
                    <div className=" px-6  text-main font-work font-semibold my-2">{tags.map((tag, idx) => <span className='mr-10' key={idx}>{tag}</span>)}</div>

                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-playfair">
                        {bookName}

                    </h2>
                    <p className='font-work text-xl'>By: {author}</p>
                    <div className='px-4'>
                 <hr className='px-4 border-dotted text-gray-200' />
               </div>
                  <div className='flex justify-between px-'>
                    <div>
                        <h4 className='text-xl'>{category}</h4>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>{rating}</p>
                        <CiStar className='text-xl' />
                    </div>
                  </div>
                </div>
               
            </div>
        </div>
    );
};

export default Book;