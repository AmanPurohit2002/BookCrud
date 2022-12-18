// import BookEdit from './BookEdit';

const BookShow=({book,onDeleteById})=>{

    const handleClick=()=>{
        onDeleteById(book.id);
    }

    return (
        <div className="book-show">
            {/* <BookEdit/> */}
            {book.title}
            <div className="actions">
                <button onClick={handleClick} className="delete" >Delete</button>
            </div>


        </div>
    )
}

export default BookShow;