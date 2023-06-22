import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormUpdateComponent } from './product-form-update.component';

describe('ProductFormUpdateComponent', () => {
  let component: ProductFormUpdateComponent;
  let fixture: ComponentFixture<ProductFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
