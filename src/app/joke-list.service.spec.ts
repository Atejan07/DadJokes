import { TestBed } from '@angular/core/testing';

import { JokeListService } from './joke-list.service';

describe('JokeListService', () => {
  let service: JokeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
