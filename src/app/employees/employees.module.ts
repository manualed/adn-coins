import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, HttpClientModule, FormsModule, EmployeesRoutingModule
  ],
  declarations: [EmployeeComponent, EmployeeListComponent ]
})
export class EmployeesModule { }
