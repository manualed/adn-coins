import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

export const routes: Routes = [
  { path: '',
    children : [
      { path: 'transaction', component: TransactionComponent},
      { path: 'transaction/:id', component: TransactionComponent},
      { path: 'transaction-list', component: TransactionListComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }