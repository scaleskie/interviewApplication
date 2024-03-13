import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent implements OnInit{
  constructor(private productService: ProductService) {
  }
  @Input() products: Product[] = [];
  @Output() viewRowItem = new EventEmitter<any>();
  @Output() deleteRowItem = new EventEmitter<any>();
  @Output() editRowItem = new EventEmitter<any>();

  filterName = null;
  cols: Object[] = [];

  ngOnInit() {
    this.cols = this.productService.getColumns();
  }
   viewRowData(rowData: any){
     this.viewRowItem.emit(rowData)
   }

  deleteRowData(rowData: any){
    this.productService.deleteProductByID(rowData.id).subscribe(data => {
      this.deleteRowItem.emit(rowData)
    });
  }

  editRowData(rowData: any){
    this.productService.updateProductByID(rowData).subscribe(data => {
      this.editRowItem.emit(data)
    })
  }

  getSpecificRow(id: number){
    this.productService.getProductByID(1).subscribe(data => {
      console.log("get by ID")
      console.log(data)
    });
  }
}
