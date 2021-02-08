import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
  }

}
