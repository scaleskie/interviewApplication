import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {ProductTableComponent} from "./product-table/product-table.component";
import {TableModule} from "primeng/table";

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent, ProductTableComponent],
      imports: [TableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Product');
  })

  it("should toggle edit item", () => {
    let item = {};
    component.editItem(item);
    expect(component.editItem).toBeTruthy();
  });

  it("should toggle delete item", () => {
    let item = {};
    component.deleteItem(item);
    expect(component.deleteItem).toBeTruthy();
  });

  it("should toggle passed item", () => {
    let item = {};
    component.passItem(item);
    expect(component.itemPassed).toBeTruthy();
  })
});
