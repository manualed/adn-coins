import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, HttpClientModule, FormsModule, TransactionRoutingModule
  ],
  declarations: [TransactionComponent, TransactionListComponent]
})

export class TransactionsModule { }
