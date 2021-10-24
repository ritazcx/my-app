import React, {useState} from 'react'
import Books from './Books';

const Header = () => {
    
    const apiKey = "TCA6F3ERSCl405KagmGI7MIe8rn2bu2U";
    const category = "hardcover-fiction";
    const date = "current";
    const [sortby, setSortBy] = useState('author');
    const [books, setBooks] = useState([]);
    let url;

    const options = [
        {
          label: "Rank",
          value: "rank",
        },
        {
          label: "Author",
          value: "author",
        },
    ];

    const handleSelectChange = (e) => {

        setSortBy(e.target.value);

        switch(sortby) {
            case "rank":
                url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${category}.json?api-key=${apiKey}`;
                console.log("sortby = " + sortby);
                break;
            // case "author":
            //     url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`;
            //     console.log("sortby = " + sortby);   
            //     break;
            default:
                url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${category}.json?api-key=${apiKey}`;
        }

        fetchBooks(url);
    }

    const fetchBooks = (url) => {
        console.log("fetchBooks run " + url);
      
        const bookRequest = new Request(url);
        fetch(bookRequest)
        .then((res) => (res.json()))
        .then((data) => {
            if(data && data.results) {
                setBooks(data.results.books);
                console.log(books);
            }
        });
      }

    return (
        <div>
            <h1>Paperback Nonfiction Bestsellers</h1>

            <div>
            Sort by:
            <select value={sortby} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>    
            </div> 
  
            <div className="book-list">
                {books.length > 0 ? (
                    <Books books={books} />
                ) : (
                    'No books to show'
                )}
            </div>
        </div>
        
    )
}

export default Header
