import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState,useEffect } from "react";
// import uuid from "react-uuid";


const App=()=>{

    const[books,setBooks]=useState([]);


    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch("http://localhost:3001/books",{
                method:'GET'
            })
            const json =await response.json();
            setBooks(json);
    
        }
        fetchData();
    },[])

    const deleteBookById=async(id)=>{

        await fetch(`http://localhost:3001/books/${id}`,{
            method:'DELETE',
            body:{'Content-Type':'application/json'}
        })

        const updateBooks=books.filter((book)=>(
            book.id!==id
        ))

        setBooks(updateBooks);
    }

    const handleCreateBook= async(title)=>{
            const response=await fetch("http://localhost:3001/books",{
                method:'POST',
                headers:{
                    "content-Type": "application/json"
                },
                body:JSON.stringify({
                    title:title
                })
            })
            const json=await response.json();
            console.log(json);

        setBooks([...books, 
            json
        ]);
    }

    const handleUpdateTitle=async(id,newtitle)=>{

        const response=await fetch(`http://localhost:3001/books/${id}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                title:newtitle
            })
        })

        const json=await response.json();

        const updateTitle=books.map((book)=>{
            // if(book.id===id){
            //     return {...books,title:newtitle}
            // }
            if(book.id===id){
                return {...books,...json}
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