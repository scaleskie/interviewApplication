import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent implements OnInit{
  constructor(private productService: ProductService) {
  }

  @Output() rowItem = new EventEmitter<any>();
  @Output() deleteRowItem = new EventEmitter<any>();
  @Output() editRowItem = new EventEmitter<any>();

  products: any = [];
  productsBE: any = [];
  cols: any = [];

  ngOnInit() {
    /*
     this.productService.getProducts().subscribe((products)=>{
      this.products = products;
    });
     this.productService.getColumns().subscribe((cols)=>{
      this.cols = cols;
    });
     */
    this.products = this.productService.getProducts();
    this.productsBE = this.productService.getProductsAPI();
    console.log(this.productsBE);
    this.cols = this.productService.getColumns();
  }

   passRowData(rowData: any){
     this.rowItem.emit(rowData)
   }

  deleteRowData(rowData: any){
    this.products = this.productService.deleteItem(rowData);
    this.deleteRowItem.emit(rowData)
  }
  editRowData(rowData: any){
    this.products = this.productService.editItem(rowData);
    this.editRowItem.emit(rowData)
  }

}
