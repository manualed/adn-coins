import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './shared/employee.service';
import { BonusesComponent } from './bonuses/bonuses.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { HeaderComponent } from './shared/header/header.component';
import { BonusService } from './shared/bonus.service';
import { TransactionService } from './shared/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HeaderComponent,
    BonusesComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [EmployeeService, BonusService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
