import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  columns: Object[] = [];
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/item/allItems');
  }
  getProductByID(id: number): Observable<Product> {
    return this.http.get<Product>('/api/item/getItem/' + id);
  }
  deleteProductByID(id: number): Observable<Product> {
    return this.http.delete<Product>('/api/item/deleteItem/' + id);
  }
/*  updateProductByID(id:number, item: Object): Observable<Object> {
    return this.http.post<Object>('/api/item/updateItem/' + id, item);
  }*/

  updateProductByID(item: Product): Observable<Product> {
    return this.http.post<Product>('/api/item/updateItem', item);
  }

  getColumns(): Object[] {
   return this.columns = [
      { field: 'id', header: 'ID' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: '', header: '' },
      { field: '', header: '' }
    ];
  }
}
