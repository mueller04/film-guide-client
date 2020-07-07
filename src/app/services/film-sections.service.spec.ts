import { TestBed } from '@angular/core/testing';

import { FilmSectionsService } from './film-sections.service';

describe('FilmSectionsService', () => {
  let service: FilmSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
