import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService) {
  }

  products: Product[] = [];
  ngOnInit() {
    this.getProducts();
  }

  itemPassed = false;
  item : any = null;
  itemDeleted = false
  itemEdit = false;

  viewRowItem(item:any){
    this.itemPassed = true;
    this.item = item;
  }

  deleteItem(item:any){
    this.itemDeleted = true;
    this.item = item;
    this.getProducts();
  }

  editItem(item:any){
    this.itemEdit = true;
    this.item = item;
    this.getProducts();
  }

  filteredProducts(filteredProducts: Product[]){
    this.products = filteredProducts;
  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
