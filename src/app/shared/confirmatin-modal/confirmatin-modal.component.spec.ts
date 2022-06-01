import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatinModalComponent } from './confirmatin-modal.component';

describe('ConfirmatinModalComponent', () => {
  let component: ConfirmatinModalComponent;
  let fixture: ComponentFixture<ConfirmatinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmatinModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
