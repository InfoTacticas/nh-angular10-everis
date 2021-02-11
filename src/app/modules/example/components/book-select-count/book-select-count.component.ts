import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-select-count',
  templateUrl: './book-select-count.component.html',
  styleUrls: ['./book-select-count.component.scss']
})
export class BookSelectCountComponent implements OnInit {

  @Input() totalBooks: number;
  constructor() { }

  ngOnInit(): void {
    this.totalBooks = 0;
  }

}
