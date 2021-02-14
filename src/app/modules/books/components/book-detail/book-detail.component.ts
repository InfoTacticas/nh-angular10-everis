import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';

import { BookMockService } from 'src/app/shared/services/book/book-mock.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() bookId : number;
  book: Book;
  constructor(
    private bookMockService : BookMockService

  ) {        
    
  }

  ngOnInit(): void {
    this.fethBook();
  }

  fethBook(): void{
    this.book = this.bookMockService.getBook(this.bookId);
  }

}
