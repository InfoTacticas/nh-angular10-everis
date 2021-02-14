import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookMockService } from '../../services/book/book-mock.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() isFeatured: boolean = false;
  @Input() showBooks : number = 3;
  classShowBook: number;

  books: Book[];
  
  constructor(
    private bookService : BookMockService
  ) { }

  ngOnInit(): void {
    // cuando el listado de libros cargue, obtener el listado de libros.
   this.fetchBooks();
   this.classShowBook = 12 / this.showBooks;
  }

  fetchBooks(): void {
    /*
    if(this.isFeatured){
      this.books = this.bookService.getFeaturedBooks();
    }
    else{
      this.books = this.bookService.getBooks();
    }
    */
    this.books = this.isFeatured ? this.bookService.getFeaturedBooks() : this.bookService.getBooks();
    
  }

}
