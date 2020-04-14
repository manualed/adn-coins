import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Employee } from "src/app/shared/employee.model";
import { HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
import { SharedModule } from "src/app/shared/shared.module";



@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  private employee: Employee = new Employee();
  titulo: string = "Empleado";
  listaTipoDocumentos: string[] =["CC","TI","PAS","CE"];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cargarEmpleado();
  }

  create(): void {
    this.employeeService.create(this.employee)
      .subscribe(employee => {
        this.router.navigate(['/employees/employee-list'])
        Swal.fire('Nuevo empleado', `Empleado creado con éxito!`, 'success')
      }
      );
  }

  cargarEmpleado(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.employeeService.getEmployee(id).subscribe((empleado) => this.employee = empleado);
      }
    })
  }
  update(): void {
    this.employeeService.update(this.employee)
      .subscribe(
        json => {
          this.router.navigate(['/employees/employee-list']);
          Swal.fire('Empleado Actualizado', '', 'success');
        },
        err => {
          console.error(err.error.errors);
        }
      )
  }


}
