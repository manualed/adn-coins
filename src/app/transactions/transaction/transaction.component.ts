import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/transaction.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/shared/transaction.service';
import Swal from 'sweetalert2';
import { EmployeeService } from 'src/app/shared/employee.service';
import { BonusService } from 'src/app/shared/bonus.service';
import { Employee } from 'src/app/shared/employee.model';
import { Bonus } from 'src/app/shared/bonus.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  private transaction: Transaction = new Transaction();
  titulo: string = "Transaccion";
  employees: Employee[];
  bonuses: Bonus[];
 

  constructor(private transactionService: TransactionService,
    private employeeService: EmployeeService,
    private bonusService: BonusService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
    this.bonusService.getBonuses().subscribe(
      bonuses => this.bonuses = bonuses
    );

    this.cargarTransaccion();
  }
  
  create(): void {
    this.transactionService.create(this.transaction)
      .subscribe(transaction => {
        this.router.navigate(['/transactions/transaction-list'])
        Swal.fire('Nueva Transaccion', `Transaccion creada con éxito!`, 'success')
      }
     );
  }

  cargarTransaccion(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.transactionService.getTransaction(id).subscribe((transaccion) => this.transaction = transaccion);
      }
    })
  }
  update(): void {
    this.transactionService.update(this.transaction)
      .subscribe(
        json => {
          this.router.navigate(['/transactions/transaction-list']);
          Swal.fire('Transaccion Actualizada', '', 'success');
        },
        err => {
          console.error(err.error.errors);
        }
      )
  }


}

