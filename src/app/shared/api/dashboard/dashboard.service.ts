import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _postProductUrl = 'https://ecom.hoolioapps.com/api/products/';
  private _getProductUrl = 'https://ecom.hoolioapps.com/api/products/';
  private _updateProductUrl = 'https://ecom.hoolioapps.com/api/products/2';
  private _deleteProductUrl = 'https://ecom.hoolioapps.com/api/products/10';

  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(this._postProductUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProduct() {
    return this.http.get<any>(this._getProductUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateProduct(data: any, id: number) {
    return this.http.put<any>(this._updateProductUrl + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(this._deleteProductUrl + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
