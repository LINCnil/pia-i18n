import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiaI18nComponent } from './pia-i18n.component';

describe('PiaI18nComponent', () => {
  let component: PiaI18nComponent;
  let fixture: ComponentFixture<PiaI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiaI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiaI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
