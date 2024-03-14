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
  editFlag = false;
  categoryName = '';
  name = '';
  quantity = '';
  newItem: any = {};

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

  editRowData(){
    this.newItem.name = this.name;
    this.newItem.category = this.categoryName;
    this.newItem.quantity = this.quantity;
    this.productService.updateProductByID(this.newItem).subscribe(data => {
      this.editRowItem.emit(this.newItem)
    })
  }

  getSpecificRow(id: number){
    this.productService.getProductByID(1).subscribe(data => {
      console.log("get by ID")
      console.log(data)
    });
  }

  editModal(rowData: any){
    this.newItem = rowData;
    this.editFlag = true;
  }
}
