import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersRoutingComponent } from './publishers-routing.component';

describe('PublishersRoutingComponent', () => {
  let component: PublishersRoutingComponent;
  let fixture: ComponentFixture<PublishersRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
