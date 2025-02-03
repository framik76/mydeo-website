import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenessereComponent } from './benessere.component';

describe('BenessereComponent', () => {
  let component: BenessereComponent;
  let fixture: ComponentFixture<BenessereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenessereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenessereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
