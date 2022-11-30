import React from 'react';
import {Book} from "../../types/type";

/**
 * Composant reçoit un objet, et affiche ses propriétées
 * @param book {Book}
 * @constructor
 */
export const BookDetail:React.FC<{book: Book}> = ({book}): JSX.Element => {
    console.log(book)
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    )
}