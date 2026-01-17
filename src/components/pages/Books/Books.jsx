import { Suspense, useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";


const Books = ({books}) => {
    // console.log(books)
    
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     const loadedBooks = async () => {
    //         const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
    //         const data = await res.json();
    //         setAllBooks(data)
    //     }
    //     loadedBooks()
    // }, [])

    // const bookPromise = fetch('./booksData.json').then(res=>res.json())
    return (
        <div>
            <h1>Hello Ami Books: </h1>
            {/* {
                <Suspense fallback={"Loading..."}>
                    <Book bookPromise={bookPromise}></Book>

                </Suspense>
            } */}
            <div className="my-8 flex flex-col items-center justify-center md:grid  md:grid-cols-2 lg:grid-cols-3  gap-4">
                {
                   books.filter(data=>data.id !== null).map(book=><Book key={book.bookId} book={book}></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;