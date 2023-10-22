import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';

const routes: Routes = [
  { path: 'invoice-main', component: MainInvoiceComponent },
  { path: 'invoice', component: InvoiceComponent }, 
 /*  { path: '', component: InvoiceListComponent }, */
  { path: 'atelier', component: ListProduitsComponent },
 /*  { path: '**', redirectTo: '/invoice-main' } */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
