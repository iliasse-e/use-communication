import React, {SetStateAction} from 'react';
import {Book} from "../../types/type";

/**
 * Ce composant reçoit un tableau d'objet, à partir duquel il constitut une liste,
 * Il reçoit aussi une fonction qui permet de renvoyer au parent une information (Dispatch)
 * @param books tableau d'objet Book
 * @param selectBook fonction qui change dans le composant parent, le champ selectedBook
 */
export const BookList:
    React.FC<{books: Book[], selectBook: React.Dispatch<React.SetStateAction<any>>}> =
    ({ books, selectBook }): JSX.Element => {

    return (
        <div>
            <ul>
                {books.map((book, index) =>
                    <li key={index} onClick={() => selectBook(index)}>{book.title}</li>)}
            </ul>
        </div>
    )
}


