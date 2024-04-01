import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceIphoneComponent } from './choice-iphone.component';

describe('ChoiceIphoneComponent', () => {
  let component: ChoiceIphoneComponent;
  let fixture: ComponentFixture<ChoiceIphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceIphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
