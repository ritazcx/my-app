const Books = ({url}) => {
    const myRequest = new Request(url);
    let books;
    fetch(myRequest)
        .then((res) => res.json())
        .then((data) => {
            books = data.results.books.map((book) => 
        <li key={book.title}>
            {book.title}
        </li>)});

        console.log(books);
        // content = data.results.books.map((book) => 
        // <div key={book.title.split(' ').join('_')}>
        //     <h3 className="booktitle">{book.title}</h3>
        //     <p className="author">by {book.author}</p>
        //     <p>{book.description}</p>
        //     <p>ISBN: {book.primary_isbn10}</p>
        // </div>)
    // })
    // const books = props.results.Books;

    return (
        <ul>{books}</ul>
    )
}

export default Books;

