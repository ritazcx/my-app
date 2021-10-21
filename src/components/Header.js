import React, {useState} from 'react'
import Books from './Books';
import Button from './Button';

let url;

const Header = () => {
    
    const apiKey = "TCA6F3ERSCl405KagmGI7MIe8rn2bu2U";
    const category = "hardcover-fiction";
    const date = "current";
    const [sortby, setSortBy] = useState('rank');

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

    function handleSelectChange(e) {

        setSortBy(e.target.value);
        console.log(sortby);   
        console.log(e.target.value);     

        switch(sortby) {
            case "rank":
                url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${category}.json?api-key=${apiKey}`;
                break;
            case "name":
                url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`;
                break;
            default:
                url = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${apiKey}`;
        }
    }


    return (
        <div>
            <h1>Paperback Nonfiction Bestsellers</h1>
            <hr/>
            <div>
            <label>Sort by:</label>
            <select value={sortby} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>    
            </div> 
            <hr/>
            <Books url={url} />
            <Button text='Show More'/>
        </div>
        
    )
}

export default Header
