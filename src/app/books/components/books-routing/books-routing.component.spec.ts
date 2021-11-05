import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRoutingComponent } from './books-routing.component';

describe('BooksRoutingComponent', () => {
  let component: BooksRoutingComponent;
  let fixture: ComponentFixture<BooksRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
