import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableFiltersComponent } from './product-table-filters.component';

describe('ProductTableFiltersComponent', () => {
  let component: ProductTableFiltersComponent;
  let fixture: ComponentFixture<ProductTableFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTableFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
