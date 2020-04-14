import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EMPLEADOS } from './EMPLEADO';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  readonly rootURL ="http://localhost:8181/api/coins/"

  constructor(private http : HttpClient,
              private router: Router) { }

  getEmployees(): Observable<Employee[]> {
    //return of(EMPLEADOS);
    return this.http.get<Employee[]>(this.rootURL.concat('empleados'));
    // return this.http.get(this.rootURL).pipe(
    //   map(response => response as Employee[])
    // );
  }

  create(employee: Employee) : Observable<Employee> {
    employee.fechaCambio= formatDate(new Date(), 'yyyy-MM-dd', 'en');
    return this.http.post<Employee>(this.rootURL.concat('empleado'), employee, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error al insertar el empleado', e.error.mensaje,'error');
        return throwError(e);
      }
        )
    )
  }

  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.rootURL.concat('empleados')}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(`${this.rootURL.concat('empleado')}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/employees']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(employee: Employee): Observable<any> {
    return this.http.put<any>(`${this.rootURL.concat('empleado')}/${employee.idEmpleado}`, employee, { headers: this.httpHeaders }).pipe(
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

 
}
