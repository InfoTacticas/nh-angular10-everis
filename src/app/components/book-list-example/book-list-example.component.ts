import { Component, OnInit } from '@angular/core';
import { IBook, IBookAgrupado } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  selectedBooksAgrupados: IBookAgrupado[];
     
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.selectedBooksAgrupados = [];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);

    
    let encontrado = false;
    for(var item of this.selectedBooksAgrupados){
      if(book.name == item.name)
      {
        item.cantidad =  item.cantidad + 1;
        encontrado = true;
        break;
      }
    }
    if(encontrado == false){
      this.selectedBooksAgrupados.push( {"id": book.id, "name": book.name, "cantidad": 1} );
    }
    console.log(this.selectedBooksAgrupados);
    
  }

  obtenerTotalSeleccionados(): number{
    return this.selectedBooks.length;
    
  }

}
