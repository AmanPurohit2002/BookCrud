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

    const handleUpdateTitle=(id,title)=>{

        const updateTitle=books.map((book)=>{
            if(book.id===id){
                return {...books,title:title}
            }
            return book;
        })

        setBooks(updateTitle);

    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate onCreate={handleCreateBook}/>
            <BookList books={books}  onDeleteById={deleteBookById} onTitleUpdate={handleUpdateTitle} />
        </div>
        
    )
}

export default App;