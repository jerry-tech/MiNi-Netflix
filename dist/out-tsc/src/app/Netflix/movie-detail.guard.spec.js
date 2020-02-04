import { TestBed, inject } from '@angular/core/testing';
import { MovieDetailGuard } from './movie-detail.guard';
describe('MovieDetailGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MovieDetailGuard]
        });
    });
    it('should ...', inject([MovieDetailGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=movie-detail.guard.spec.js.map