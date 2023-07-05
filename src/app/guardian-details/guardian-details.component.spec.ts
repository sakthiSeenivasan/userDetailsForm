import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianDetailsComponent } from './guardian-details.component';

describe('GuardianDetailsComponent', () => {
  let component: GuardianDetailsComponent;
  let fixture: ComponentFixture<GuardianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
