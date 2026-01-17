import { useLoaderData, useParams } from "react-router";


const BookDetails = () => {
    const {id} = useParams();
    const bookDetails = useLoaderData();
    console.log(bookDetails)
    const singleData=bookDetails.find(book=>book.bookId===parseInt(id))
    console.log(singleData)
    return (
        <div>
            <h1>Book Details</h1>
        </div>
    );
};

export default BookDetails;