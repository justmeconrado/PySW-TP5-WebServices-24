import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoBComponent } from './punto-b.component';

describe('PuntoBComponent', () => {
  let component: PuntoBComponent;
  let fixture: ComponentFixture<PuntoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuntoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
