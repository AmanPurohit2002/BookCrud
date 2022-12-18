import BookShow from "./BookShow";

const BookList=({books,onDeleteById})=>{

    const renderedBooks=books.map((book)=>{
        return <BookShow key={book.id} book={book} onDeleteById={onDeleteById}/>
    })

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;