import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-example',
  templateUrl: './book-example.component.html',
  styleUrls: ['./book-example.component.css']
})
export class BookExampleComponent {
  @Input() book: IBook;
  @Output() clickBook: EventEmitter<IBook>;
  constructor() {
    this.clickBook = new EventEmitter();
  }

  onClickBook(): void {
    console.log("click en el libro: ", this.book.name);
    this.clickBook.emit(this.book);
  }
}
