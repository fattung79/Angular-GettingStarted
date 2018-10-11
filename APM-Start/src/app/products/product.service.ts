import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/Operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}