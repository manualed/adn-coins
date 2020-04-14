import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { Transaction } from "./transaction.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class TransactionService {
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    readonly rootURL ="http://localhost:8181/api/coins/"
  
    constructor(private http : HttpClient,
                private router: Router) { }
  
    getTransactions(): Observable<Transaction[]> {
      //return of(EMPLEADOS);
      return this.http.get<Transaction[]>(this.rootURL.concat('transacciones'));
      // return this.http.get(this.rootURL).pipe(
      //   map(response => response as Employee[])
      // );
    }
  
    create(transaction: Transaction) : Observable<Transaction> {
      return this.http.post<Transaction>(this.rootURL.concat('transaccion'), transaction, {headers: this.httpHeaders}).pipe(
        catchError(e =>{
          console.error(e.error.mensaje);
          Swal.fire('Error al insertar la transaccion', e.error.mensaje,'error');
          return throwError(e);
        }
          )
      )
    }
  
    delete(id: number): Observable<Transaction> {
      return this.http.delete<Transaction>(`${this.rootURL.concat('transacciones')}/${id}`, { headers: this.httpHeaders }).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
    }
  
    getTransaction(id): Observable<Transaction> {
      return this.http.get<Transaction>(`${this.rootURL.concat('transaccion')}/${id}`).pipe(
        catchError(e => {
          this.router.navigate(['/transactions']);
          console.error(e.error.mensaje);
          Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
    }
  
    update(transaction: Transaction): Observable<any> {
      return this.http.put<any>(`${this.rootURL.concat('transaccion')}/${transaction.idTransaccion}`, transaction, { headers: this.httpHeaders }).pipe(
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
  