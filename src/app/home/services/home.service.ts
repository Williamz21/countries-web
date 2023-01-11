import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  basePath='https://restcountries.com/v2/all?fields=name,region,capital,population,flags'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`Ann error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }

  getAllCountries(){
    return this.http.get(`${this.basePath}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAllByRegion(region:string){
    return this.http.get('https://restcountries.com/v2/region/'+region+'/?fields=name,region,capital,population,flags')
    .pipe(
      catchError(this.handleError)
    )
  }
}
