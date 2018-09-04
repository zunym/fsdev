import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsCharDetailsComponent } from './star-wars-char-details.component';

describe('StarWarsCharDetailsComponent', () => {
  let component: StarWarsCharDetailsComponent;
  let fixture: ComponentFixture<StarWarsCharDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsCharDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsCharDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
