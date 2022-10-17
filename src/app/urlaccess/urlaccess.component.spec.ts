import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlaccessComponent } from './urlaccess.component';

describe('UrlaccessComponent', () => {
  let component: UrlaccessComponent;
  let fixture: ComponentFixture<UrlaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
