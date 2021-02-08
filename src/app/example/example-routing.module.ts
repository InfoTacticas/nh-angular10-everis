import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { TemplateFormPageComponent } from './pages/template-form-page/template-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'component',
    component: ExamplePageComponent
  },
  {
    path: 'forms',
    component: TemplateFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]/*,
  exports: [RouterModule]*/
})
export class ExampleRoutingModule { }
