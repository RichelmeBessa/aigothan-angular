import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class DashboardModules {

}