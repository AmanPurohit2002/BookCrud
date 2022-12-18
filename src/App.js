import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";
import uuid from 'react-uuid';

const App=()=>{
    const[books,setBooks]=useState([]);

    const deleteBookById=(id)=>{
        const updateBooks=books.filter((book)=>(
            book.id!==id
        ))

        setBooks(updateBooks);
    }

    const handleCreateBook=(title)=>{
        // console.log("hey i am",title);

        
        setBooks([...books,
            {id:uuid(),title:title}
        ]);
    }

    return (
        <div className="app">
            <BookCreate onCreate={handleCreateBook}/>
            <BookList books={books}  onDeleteById={deleteBookById} />
        </div>
        
    )
}

export default App;