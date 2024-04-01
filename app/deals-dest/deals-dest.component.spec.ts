import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsDestComponent } from './deals-dest.component';

describe('DealsDestComponent', () => {
  let component: DealsDestComponent;
  let fixture: ComponentFixture<DealsDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealsDestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealsDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
