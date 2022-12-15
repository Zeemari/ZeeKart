import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-type': 'application/json',
    token: '12345',
  });

  params = new HttpParams().set('PageSize', '100').set('PageNum', '10');

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/products/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProduct() {
    return this.http
      .get<any>('http://localhost:3000/products/', {
        headers: this.headers,
        params: this.params,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateProduct(data: any, id: number) {
    return this.http
      .put<any>('http://localhost:3000/products/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/products/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
