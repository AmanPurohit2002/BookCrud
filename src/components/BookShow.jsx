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

    const handleSubmit=(id,updatedTitle)=>{
        setShowEdit(false);
        onTitleUpdate(id,updatedTitle);
    }

    let content=<h3>{book.title}</h3>;

    if(showEdit){
        content=<BookEdit onSubmitted={handleSubmit} book={book}/>
    }

    return (
        <div className="book-show">
            <img  alt="images" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{content}</div>
            
            <div className="actions">
                <button onClick={handleEditClick} className="edit">Edit</button>
                <button onClick={handleDeleteClick} className="delete" >Delete</button>
            </div>


        </div>
    )
}

export default BookShow;