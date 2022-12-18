import BookShow from "./BookShow";

const BookList=({books,onDeleteById,onTitleUpdate})=>{

    const renderedBooks=books.map((book)=>{
        return <BookShow book={book} onDeleteById={onDeleteById} onTitleUpdate={onTitleUpdate}/>
    })

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList;