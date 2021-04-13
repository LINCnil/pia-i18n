import { TestBed } from '@angular/core/testing';

import { PiaI18nService } from './pia-i18n.service';

describe('PiaI18nService', () => {
  let service: PiaI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiaI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
