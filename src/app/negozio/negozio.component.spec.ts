import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegozioComponent } from './negozio.component';

describe('NegozioComponent', () => {
  let component: NegozioComponent;
  let fixture: ComponentFixture<NegozioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegozioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegozioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
