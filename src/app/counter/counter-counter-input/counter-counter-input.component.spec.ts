import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCounterInputComponent } from './counter-counter-input.component';

describe('CounterCounterInputComponent', () => {
  let component: CounterCounterInputComponent;
  let fixture: ComponentFixture<CounterCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCounterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
