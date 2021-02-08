import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


import { ExampleRoutingModule } from './example-routing.module';

import { HelloComponent } from './components/hello.component';
import { BookExampleComponent } from './components/book-example/book-example.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookListExampleComponent } from './components/book-list-example/book-list-example.component';
import { BookSelectCountComponent } from './components/book-select-count/book-select-count.component';

import { CustomNamePipe } from './components/book-example/book-name.pipe';
import { PublisherPrettyPipe } from './components/book-example/publisher-pretty.pipe';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { BookTopExampleDirective } from './components/book-example/book-top-example.directive';
import { SuscriptionFormComponent } from './components/suscription-form/suscription-form.component';
import { TemplateFormPageComponent } from './pages/template-form-page/template-form-page.component';
import { SuscriptionInlineFormComponent } from './components/suscription-inline-form/suscription-inline-form.component';
import { ReserveBookFormComponent } from './components/reserve-book-form/reserve-book-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MessageErrorComponent } from './components/register-form/message-error/message-error.component';


@NgModule({
  declarations: [    
    HelloComponent,
    BookExampleComponent,
    HomePageComponent,
    BookListExampleComponent,
    BookSelectCountComponent,
    CustomNamePipe,
    PublisherPrettyPipe,
    ExamplePageComponent,
    BookTopExampleDirective,
    SuscriptionFormComponent,
    TemplateFormPageComponent,
    SuscriptionInlineFormComponent,
    ReserveBookFormComponent,
    RegisterFormComponent,
    MessageErrorComponent,
  ],
  imports: [
    
    ExampleRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  
})
export class ExampleModule { }