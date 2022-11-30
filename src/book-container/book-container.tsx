import React, {useState} from 'react';
import {Book} from "../types/type";
import {BookList} from "./book-list/BookList";
import {BookDetail} from "./book-detail/BookDetail";

/**
 * Ce composant contient deux enfants, avec lequel il communique,
 * Il envoie une liste d'objets (Book) à BookList, et récupère un flux d'information, qui permet de changer le champs selectedBook
 * Il envoie aussi selectedBook au composant BookDetail, qui affichera cet objet
 */
export function BookContainer(): JSX.Element {
    let books: Book[] = new Array<Book>()
    const [selectedBook, setSelectedBook] = useState<Book>();

    // methode qui sera donné à un composant enfant visant à changer le champs selectedBook au click
    const selectBook = (index: number): void => {
        setSelectedBook(books[index]);
    }

    // Init datas
    books.push(({title: "Kitab al-furusiyya wa-al-baytara", author: "Ibn Ahi Hizam"}),
    ({title: "Mongols and Mamluks. The Mamluk-&lkh$nid War", author: "Amitai Preiss"}),
    ({title: "Al mawa'id wa al-i'tibar fi dhikr  al khotot wa athar", author: "Al Maqrizi"}),
    ({title: "Kitab al-i'tibar", author: "Ibn Munqid, Usama"}));

    return (
        <div>
            <h2>Choisissez parmi une collection sur la période médievale</h2>
            <div>
                <BookList books={books} selectBook={selectBook} />
                {selectedBook && <BookDetail book={selectedBook} />}
            </div>
        </div>
    )
}