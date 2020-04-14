import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/transaction.model';
import { TransactionService } from 'src/app/shared/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      transactions => this.transactions = transactions
    );
  }

  delete(transaction: Transaction): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la transaccion?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.value) {

        this.transactionService.delete(transaction.idTransaccion).subscribe(
          () => {
            this.transactions = this.transactions.filter(emp => emp !== transaction)
            Swal.fire(
              'Transaccion Eliminada!',
              `Transaccion ${transaction.idTransaccion} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

}
