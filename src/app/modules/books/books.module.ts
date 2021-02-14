import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { BooksRoutingModule } from './books-routing.module';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';



@NgModule({
  declarations: [BookListPageComponent, BookDetailPageComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
  ]
})
export class BooksModule { }
