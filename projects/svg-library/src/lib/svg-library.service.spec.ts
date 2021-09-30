import { TestBed } from '@angular/core/testing';

import { SvgLibraryService } from './svg-library.service';

describe('SvgLibraryService', () => {
  let service: SvgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
