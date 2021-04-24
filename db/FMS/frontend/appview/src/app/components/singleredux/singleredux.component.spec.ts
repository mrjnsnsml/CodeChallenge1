import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglereduxComponent } from './singleredux.component';

describe('SinglereduxComponent', () => {
  let component: SinglereduxComponent;
  let fixture: ComponentFixture<SinglereduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglereduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglereduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
