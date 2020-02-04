import { async, TestBed } from '@angular/core/testing';
import { MovieThumbnailComponent } from './movie-thumbnail.component';
describe('MovieThumbnailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MovieThumbnailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MovieThumbnailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movie-thumbnail.component.spec.js.map