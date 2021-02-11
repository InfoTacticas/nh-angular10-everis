import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from './modules/Layout/layout/layout.component';
import { LayoutAdminComponent } from './modules/Layout/layout-admin/layout-admin.component';
import { HeaderComponent } from './modules/Layout/header/header.component';
import { FooterComponent } from './modules/Layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutAdminComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
