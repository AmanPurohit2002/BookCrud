import { useState } from "react";

const BookCreate=({onCreate})=>{

    const[title,setTitle]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        onCreate(title);

        setTitle('');
    }

    const handleChange=(e)=>{
        setTitle(e.target.value);
    }

    return (
        <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title of the book</label>
            <input className="input" type="text" value={title} onChange={handleChange}/>
            <button className="button" >Submit</button>
        </form>
            
        </div>
    )
}

export default BookCreate;