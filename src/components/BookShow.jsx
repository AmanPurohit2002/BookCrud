import BookEdit from './BookEdit';
import { useState } from "react";

const BookShow=({book,onDeleteById,onTitleUpdate})=>{
    const[showEdit,setShowEdit]=useState(false);

    const handleDeleteClick=()=>{
        onDeleteById(book.id);
    }

    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    }

    let content=<h3>{book.title}</h3>;

    if(showEdit){
        content=<BookEdit onTitleUpdate={onTitleUpdate} book={book}/>
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            
            <div className="actions">
                <button onClick={handleEditClick} className="edit">Edit</button>
                <button onClick={handleDeleteClick} className="delete" >Delete</button>
            </div>


        </div>
    )
}

export default BookShow;