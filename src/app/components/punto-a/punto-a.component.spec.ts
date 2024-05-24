import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoAComponent } from './punto-a.component';

describe('PuntoAComponent', () => {
  let component: PuntoAComponent;
  let fixture: ComponentFixture<PuntoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuntoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
