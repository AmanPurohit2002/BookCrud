import { useState } from "react";

const BookCreate=({onCreate})=>{

    const[title,setTitle]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        onCreate(title);

        setTitle('');
    }

    const handleTitle=(e)=>{
        setTitle(e.target.value.replace(/^\s/,""));
    }

    const disable=title.length===0;

    const myStyle={
        zIndex:'1',
        backgroundColor:'#996174'
    }

    return (
        <div className="book-create" style={myStyle}>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title of the book</label>
            <input className="input" type="text" value={title} onChange={handleTitle}/>
            <button className="button" disabled={disable}>Submit</button>
        </form>
            
        </div>
    )
}

export default BookCreate;