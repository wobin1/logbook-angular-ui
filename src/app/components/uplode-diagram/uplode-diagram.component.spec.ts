import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodeDiagramComponent } from './uplode-diagram.component';

describe('UplodeDiagramComponent', () => {
  let component: UplodeDiagramComponent;
  let fixture: ComponentFixture<UplodeDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplodeDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
