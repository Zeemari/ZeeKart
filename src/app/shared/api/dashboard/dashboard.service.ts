import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _postProductUrl = 'https://ecom.hoolioapps.com/api/products';
  private _getProductUrl = 'https://ecom.hoolioapps.com/api/products';
  private _updateProductUrl = 'https://ecom.hoolioapps.com/api/products/';
  private _deleteProductUrl = 'https://ecom.hoolioapps.com/api/products/10';
  private _uploadImageUrl = 'http://ecom.hoolioapps.com/storage/proodcts/';

  constructor(private http: HttpClient) {}

  // createProduct(productData: any) {
  //   return this.http.post<any>(this._postProductUrl + 'products', productData);
  // }

  Createproduct(body: any): Observable<any> {
    let myHeaders = new HttpHeaders();
    let token = localStorage.getItem('token');
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(this._postProductUrl, body, {
      headers: myHeaders,
    });
  }

  getProduct(): Observable<any> {
    return this.http.get<any>(this._getProductUrl);
  }

  // updateProduct(data: any) {
  //   return this.http.patch<any>(this._updateProductUrl, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  updateProduct(body: any): Observable<any> {
    return this.http.patch<any>(this._updateProductUrl, body);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(this._deleteProductUrl + id);
  }
}
