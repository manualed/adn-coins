import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
  { path: '',
    children : [
      { path: 'employee', component: EmployeeComponent},
      { path: 'employee/:id', component: EmployeeComponent },
      { path: 'employee-list', component: EmployeeListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }