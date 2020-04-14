import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'employees' }
    ,{
      path: 'employees',
      loadChildren: './employees/employees.module#EmployeesModule'
      //loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
    }
    ,{
      path: 'transactions',
      loadChildren: './transactions/transactions.module#TransactionsModule'
      //loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
    }
    ,{
      path: 'bonuses',
      loadChildren: './bonuses/bonuses.module#BonusesModule'
      //loadChildren: () => import('./bonuses/bonuses.module').then(m => m.BonusesModule)
    }

  ];
  export class AppRoutingModule { }