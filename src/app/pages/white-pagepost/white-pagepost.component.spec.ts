import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePagepostComponent } from './white-pagepost.component';

describe('WhitePagepostComponent', () => {
  let component: WhitePagepostComponent;
  let fixture: ComponentFixture<WhitePagepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitePagepostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhitePagepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
