import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class HeaderService {
    
    constructor(private http: HttpClient) { 

    }

    baseURL:string = "https://www.datos.gov.co/resource/32sa-8pi3.json";

    public getJSON(): Observable<any> {
      return this.http.get(this.baseURL);
    }
    }
    