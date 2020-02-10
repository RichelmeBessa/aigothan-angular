import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesPage } from './companies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  }
];

@NgModule({
  declarations: [CompaniesPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompaniesModule {

}