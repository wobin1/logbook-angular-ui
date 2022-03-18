import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiwesValedictoryActiivitiesComponent } from './siwes-valedictory-actiivities.component';

describe('SiwesValedictoryActiivitiesComponent', () => {
  let component: SiwesValedictoryActiivitiesComponent;
  let fixture: ComponentFixture<SiwesValedictoryActiivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiwesValedictoryActiivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiwesValedictoryActiivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
