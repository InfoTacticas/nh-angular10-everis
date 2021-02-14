import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookShortComponent } from './components/book-short/book-short.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';
import { BookMockService } from './services/book/book-mock.service';




@NgModule({
  declarations: [
    BookListComponent,
    BookShortComponent,
    FormMessageErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BookListComponent,
    FormMessageErrorComponent,
  ],
  providers: [
    BookMockService
  ]
})
export class SharedModule { }
