import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLightComponent } from './power-light.component';

describe('PowerLightComponent', () => {
  let component: PowerLightComponent;
  let fixture: ComponentFixture<PowerLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
