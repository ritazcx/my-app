import React from 'react'
import PropTypes from 'prop-types'

const Book = ({book}) => {
    return (
        <div className="book">
            <div className="image">
                <img src={book.book_image} alt=""/>
            </div>
            <div className="book-content">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>{book.description}</p>
                <p>ISBN: {book.primary_isbn10}</p>
            </div>   
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book
