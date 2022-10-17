import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsettingComponent } from './urlsetting.component';

describe('UrlsettingComponent', () => {
  let component: UrlsettingComponent;
  let fixture: ComponentFixture<UrlsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
