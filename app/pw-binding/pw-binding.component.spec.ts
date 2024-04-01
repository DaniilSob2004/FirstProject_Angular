import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwBindingComponent } from './pw-binding.component';

describe('PwBindingComponent', () => {
  let component: PwBindingComponent;
  let fixture: ComponentFixture<PwBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
