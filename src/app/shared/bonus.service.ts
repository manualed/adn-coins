import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Bonus } from "./bonus.model";
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class BonusService {
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    readonly rootURL ="http://localhost:8181/api/coins/"
  
    constructor(private http : HttpClient,
                private router: Router) { }
  
    getBonuses(): Observable<Bonus[]> {
      //return of(EMPLEADOS);
      return this.http.get<Bonus[]>(this.rootURL.concat('bonificaciones'));
      // return this.http.get(this.rootURL).pipe(
      //   map(response => response as Employee[])
      // );
    }
  
    create(bonus: Bonus) : Observable<Bonus> {
      return this.http.post<Bonus>(this.rootURL.concat('bonificacion'), bonus, {headers: this.httpHeaders}).pipe(
        catchError(e =>{
          console.error(e.error.mensaje);
          Swal.fire('Error al insertar la bonificacion', e.error.mensaje,'error');
          return throwError(e);
        }
          )
      )
    }

    delete(id: number): Observable<Bonus> {
      return this.http.delete<Bonus>(`${this.rootURL.concat('bonificaciones')}/${id}`, { headers: this.httpHeaders }).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
    }
  
    getBonus(id): Observable<Bonus> {
      return this.http.get<Bonus>(`${this.rootURL.concat('bonificacion')}/${id}`).pipe(
        catchError(e => {
          this.router.navigate(['/bonuses']);
          console.error(e.error.mensaje);
          Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
    }
  
    update(bonus: Bonus): Observable<any> {
      return this.http.put<any>(`${this.rootURL.concat('bonificacion')}/${bonus.idBonificacion}`, bonus, { headers: this.httpHeaders }).pipe(
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
  