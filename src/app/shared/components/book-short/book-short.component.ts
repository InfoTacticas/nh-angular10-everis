import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
@Component({
  selector: 'app-book-short',
  templateUrl: './book-short.component.html',
  styleUrls: ['./book-short.component.scss']
})
export class BookShortComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
