import Book from "./Book"
import Button from './Button';
import { useState } from "react";

const Books = ({books}) => {
    const [listLength, setlistLength] = useState(5)

    const [showList, setShowList] = useState(books
        .filter((book, index) => (index < listLength)))

    const handleClick = () => {
        setlistLength(listLength + 5 > books.length ? books.length : listLength + 5);
        setShowList(books
            .filter((book, index) => (index < listLength)));
    }

    return (
        <>
            {
                showList
                .map((book, index) =>(
                <Book key={index} book={book} />
            ))}
            <Button text='Show More' onClick={handleClick}/>
        </>
    )
}

export default Books

