import { TestBed, async, inject } from '@angular/core/testing';

import { MovieDetailGuard } from './movie-detail.guard';

describe('MovieDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailGuard]
    });
  });

  it('should ...', inject([MovieDetailGuard], (guard: MovieDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
