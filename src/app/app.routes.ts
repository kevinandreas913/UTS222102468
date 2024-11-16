import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const routes: Routes = [
  {path: "ecommerce", component: EcommerceComponent},
  {path: "", redirectTo: "ecommerce", pathMatch: "full"}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutes {}
