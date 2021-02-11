import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent  } from 'src/app/core/pages/not-found-page/not-found-page.component';
import { LayoutAdminComponent } from './modules/Layout/layout-admin/layout-admin.component';
import { LayoutComponent } from './modules/Layout/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'books',
        loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
      } ,
    ]
  } ,
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  } ,
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
