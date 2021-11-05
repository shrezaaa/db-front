import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsRoutingComponent } from './authors-routing.component';

describe('AuthorsRoutingComponent', () => {
  let component: AuthorsRoutingComponent;
  let fixture: ComponentFixture<AuthorsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
