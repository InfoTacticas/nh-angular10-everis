import { Component, OnInit, Input } from '@angular/core';
import { IBookAgrupado } from '../book';

@Component({
  selector: 'app-book-select-count-group',
  templateUrl: './book-select-count-group.component.html',
  styleUrls: ['./book-select-count-group.component.scss']
})
export class BookSelectCountGroupComponent implements OnInit {

  @Input() bookSelected: IBookAgrupado;

  constructor() { }

  ngOnInit(): void {
  }

}
