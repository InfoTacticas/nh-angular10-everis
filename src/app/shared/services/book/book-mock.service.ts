import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import {  booksMock } from '../../mocks/books.mock';

@Injectable({
  providedIn: 'root'
})
export class BookMockService {

  constructor() { 
    
  }

    getBooks() : Book[]{
      return booksMock;
    }

    getFeaturedBooks() : Book[]{
      const featureBooks : Book[] = booksMock.filter( book => book.featured === true );
      return featureBooks;
    }

    getBook(id: number): Book {

      const book : Book= booksMock.find( book => book.id === id );
      return book;
    } 
}
