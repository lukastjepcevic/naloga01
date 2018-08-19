import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Http, Response, HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { MockBackend } from '@angular/http/testing';

describe('ApiService', () => {

  let service: ApiService;
  let MockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService]
    });
  });
  
  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
