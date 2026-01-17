import { Link, useLoaderData, useParams } from "react-router";


const BookDetails = () => {
    const { id } = useParams();
    const bookDetails = useLoaderData();
    console.log(bookDetails)
    const singleData = bookDetails.find(book => book.bookId === parseInt(id))
    console.log(singleData)
    const { image, author, bookName, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleData;
    return (
        <div className="my-4">
            <div className="flex flex-col gap-4 md:flex-row   px-4 ">
                <div className="md:w-1/2 bg-amber-50 rounded-lg">
                    <figure className=" flex justify-center p-8" >
                        <img src={image} className="rounded-lg  max-w-\[200px] sm:max-w-xs lg:max-w-md w-full object-cover shadow-2xl" alt="" />
                    </figure>
                </div>
                <div className=" md:w-1/2">
                    <div>
                        <h1 className="font-playfair text-2xl  font-bold text-center md:text-left md:text-5xl">{bookName}</h1>
                        <p className="text-center md:text-left text-xl font-work my-4 font-medium">By: {author}</p>
                        <div className="flex w-full flex-col">
                            <div className="divider divider-start"></div>
                            <div className=" font-medium font-work text-xl">{category}</div>
                            <div className="divider divider-end"></div>
                        </div>

                        <p className="font-work my-1 ">
                            <span className="font-black text-xl">Rivew:</span>{review}
                        </p>
                        <p className="my-8"><span className="font-black">Tag</span> {tags.map((tag, idx) => <span className="text-main 
                        
                        font-semibold " key={idx}># {tag}</span>)}</p>

                        <div className="flex w-full flex-col">
                            <div className="divider divider-start"></div>

                        </div>
                        {/* Table */}
                        <div className="my-4">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra md:w-1/2">
                                    {/* head */}

                                    <tbody className="">
                                        {/* row 1 */}

                                        <tr>
                                            <td>Number of Pages:</td>
                                            <th>{totalPages}</th>
                                        </tr>

                                        {/* row 2 */}
                                        <tr>
                                            <td>Publisher:</td>
                                            <th>{publisher}</th>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Year of Publishing:</td>
                                            <th>{yearOfPublishing}</th>
                                        </tr>

                                        {/* row 4 */}
                                        <tr>
                                            <td>Rating:</td>
                                            <th>{rating}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Button */}

                        <div className="flex justify-center md:justify-start gap-4">
                            <button className="btn btn-outline">Read</button>
                            <button className="btn bg-second text-white font-semibold">Wishlist</button>
                        </div>
                        
                    </div>
                    
                </div>



            </div>
            


        </div>
    );
};

export default BookDetails;