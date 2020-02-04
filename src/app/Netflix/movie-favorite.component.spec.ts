import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavoriteComponent } from './movie-favorite.component';

describe('MovieFavoriteComponent', () => {
  let component: MovieFavoriteComponent;
  let fixture: ComponentFixture<MovieFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
