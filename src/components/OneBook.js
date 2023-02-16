import React from "react";

const OneBook = ({book})=>{
   
    return(

        <>
        {book?.category === "women's clothing"  ? 
        (
        <div className="book" key={book.id}>
        <div>
            <p>{book.id}</p>
        </div>
        <div>
            <img src={book.image !== 'N/A' ? book.image : 'https://via.placeholder.com/400'} alt="image"/>
        </div>
        <div>
            
            <span>{book.Price}</span>
            <h3>{book.category}</h3>
        </div>
    </div> ) :(0)
    
          }
        </>
    )
}

export default OneBook;