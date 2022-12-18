import { useState } from "react";

const BookEdit=({onSubmitted,book})=>{
    const [updateTitle,setUpdateTitle]=useState(book.title);

    const handleSubmit=(e)=>{
        e.preventDefault();

        // onTitleUpdate();
        onSubmitted(book.id,updateTitle);

        setUpdateTitle('');


    }

    const handleChange=(e)=>{
        setUpdateTitle(e.target.value);
    }

  
    return (
        <div className="book-edit">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" value={updateTitle} onChange={handleChange}/>
                <button className="button is-primary" >Save</button>
            </form>
        </div>
    )
}

export default BookEdit;