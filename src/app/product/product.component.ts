import { Component } from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private productService: ProductService) {
  }

  itemPassed = false;
  item : any = null;
  itemDeleted = false
  itemEdit = false;

  passItem(item:any){
    this.itemPassed = true;
    this.item = item;
  }

  deleteItem(item:any){
    this.itemDeleted = true;
    this.item = item;
  }

  editItem(item:any){
    this.itemEdit = true;
    this.item = item;
  }

}
