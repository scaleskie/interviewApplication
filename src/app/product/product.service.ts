import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  columns: Object[] = [];
  products: Object[] = [];

  constructor(private http: HttpClient) { }

  getProductsAPI(): any {
   return this.http.get('/api/list').subscribe(data => {
      console.log("api call was made")
      console.log(data);
    });
  }
  /*
  getColumns(): any{
    this.http.get('https://api.example.com/product/columns')
      .subscribe(data => {
        return data;
      });
  }
    getProducts(): any{
    this.http.get('https://api.example.com/product/products')
      .subscribe(data => {
        return data;
      });
  }
   */

  getColumns(): Object[] {
   return this.columns = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: '', header: '' },
      { field: '', header: '' }
    ];
  }

  getProducts(): Object[]{
    return this.products = [
      {
        code: "MAZ123",
        name: "Mazda",
        category: "Vehicle",
        quantity: "3"
      },
      {
        code: "TES123",
        name: "Tesla",
        category: "Vehicle",
        quantity: "1"
      },
      {
        code: "CHE123",
        name: "Chevy",
        category: "Vehicle",
        quantity: "5"
      },
      {
        code: "FOR123",
        name: "Ford",
        category: "Vehicle",
        quantity: "5"
      }];
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
