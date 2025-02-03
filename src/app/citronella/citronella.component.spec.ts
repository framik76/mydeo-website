import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitronellaComponent } from './citronella.component';

describe('CitronellaComponent', () => {
  let component: CitronellaComponent;
  let fixture: ComponentFixture<CitronellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitronellaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitronellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
