import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAudiencesComponent } from './sorting-audiences.component';

describe('SortingAudiencesComponent', () => {
  let component: SortingAudiencesComponent;
  let fixture: ComponentFixture<SortingAudiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortingAudiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingAudiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
