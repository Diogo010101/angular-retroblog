import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSmallmorecardComponent } from './app-smallmorecard.component';

describe('AppSmallmorecardComponent', () => {
  let component: AppSmallmorecardComponent;
  let fixture: ComponentFixture<AppSmallmorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSmallmorecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSmallmorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
