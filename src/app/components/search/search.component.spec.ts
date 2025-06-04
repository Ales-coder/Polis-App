import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
