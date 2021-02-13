import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';
import { SuscribeService } from './services/suscribe.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LayoutAdminComponent,
    SuscribeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    SuscribeService
    //{provide: SuscribeService, useClass: SuscribeService}
  ]
})
export class LayoutModule {

}
