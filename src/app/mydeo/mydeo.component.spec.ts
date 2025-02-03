import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydeoComponent } from './mydeo.component';

describe('MydeoComponent', () => {
  let component: MydeoComponent;
  let fixture: ComponentFixture<MydeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MydeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
