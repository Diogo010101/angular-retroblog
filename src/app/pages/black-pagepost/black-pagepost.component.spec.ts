import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPagepostComponent } from './black-pagepost.component';

describe('BlackPagepostComponent', () => {
  let component: BlackPagepostComponent;
  let fixture: ComponentFixture<BlackPagepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackPagepostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackPagepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
