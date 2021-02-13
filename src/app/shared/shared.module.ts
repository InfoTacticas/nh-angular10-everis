import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookShortComponent } from './components/book-short/book-short.component';



@NgModule({
  declarations: [BookListComponent, BookShortComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent
  ]
})
export class SharedModule { }
