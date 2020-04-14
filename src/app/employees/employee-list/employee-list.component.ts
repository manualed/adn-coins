import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  
  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

  delete(employee: Employee): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al empleado?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.value) {

        this.employeeService.delete(employee.idEmpleado).subscribe(
          () => {
            this.employees = this.employees.filter(emp => emp !== employee)
            Swal.fire(
              'Empleado Eliminado!',
              `Empleado ${employee.primerNombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }





}
