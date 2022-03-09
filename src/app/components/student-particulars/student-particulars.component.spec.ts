import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParticularsComponent } from './student-particulars.component';

describe('StudentParticularsComponent', () => {
  let component: StudentParticularsComponent;
  let fixture: ComponentFixture<StudentParticularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentParticularsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
