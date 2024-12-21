import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewComponent } from './afterview.component';

describe('AfterviewComponent', () => {
  let component: AfterviewComponent;
  let fixture: ComponentFixture<AfterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
