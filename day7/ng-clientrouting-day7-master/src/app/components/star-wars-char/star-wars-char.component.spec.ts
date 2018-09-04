import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsCharComponent } from './star-wars-char.component';

describe('StarWarsCharComponent', () => {
  let component: StarWarsCharComponent;
  let fixture: ComponentFixture<StarWarsCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
