const Books = ({url}) => {
    const myRequest = new Request(url);
    let content;
    fetch(myRequest)
    .then((res) => res.json())
    .then((data) => { 
        console.log(data.results.books);
        // Books(results);

        // content = data.results.books.map((book) => 
        // <div key={book.title.split(' ').join('_')}>
        //     <h3 className="booktitle">{book.title}</h3>
        //     <p className="author">by {book.author}</p>
        //     <p>{book.description}</p>
        //     <p>ISBN: {book.primary_isbn10}</p>
        // </div>)
    })
    // const books = props.results.Books;

    return (
        // <div>{url}</div>
        <div>{content}</div>  
    )
}

export default Books;

