import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRoutingComponent } from './customers-routing.component';

describe('CustomersRoutingComponent', () => {
  let component: CustomersRoutingComponent;
  let fixture: ComponentFixture<CustomersRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
