import { TestBed } from '@angular/core/testing';

import { FilmSectionsEffectService } from './film-sections-effect.service';

describe('FilmSectionsEffectService', () => {
  let service: FilmSectionsEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSectionsEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
