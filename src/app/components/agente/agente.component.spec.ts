import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteComponent } from './agente.component';

describe('AgenteComponent', () => {
  let component: AgenteComponent;
  let fixture: ComponentFixture<AgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
