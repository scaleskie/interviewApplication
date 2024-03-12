import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  columns: Object[] = [];
  products: Object[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Object[]> {
    return this.http.get<Object[]>('/api/list');
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

  deleteItem(item: Object): Object[]{
    const index: number = this.products.indexOf(item);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    return this.products;
  }

  editItem(item: Object): Object[]{
    const index: number = this.products.indexOf(item);
    if (index !== -1) {
      this.products[index] =  {
        code: "EDIT",
        name: "EDIT",
        category: "EDIT",
        quantity: "EDIT"
      };
    }
    return this.products;
  }
}
