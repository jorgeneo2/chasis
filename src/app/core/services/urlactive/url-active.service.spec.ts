import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UrlActiveService } from './url-active.service';


describe('UrlActiveService', () => {
  let service: UrlActiveService;
  let httpMock: HttpTestingController;

  const result = {
    active_when: {
      BASE: '/',
      PAYMENT: '/payments'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(UrlActiveService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('loadURLS() should http GET ENDPOINTS', () => {
    service.loadURLSWhen();
    const req = httpMock.expectOne('assets/resources/active_urls.json');
    expect(req.request.method).toEqual('GET');
    req.flush(result);
    httpMock.verify();
  });

});

describe('UrlActiveService -- dont load metadata from MetadataService', () => {
  let service: UrlActiveService;
  let httpMock: HttpTestingController;

  const result = {
    active_when: {
      BASE: '/',
      PAYMENT: '/payments'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(UrlActiveService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('loadURLS() should http GET ENDPOINTS', () => {
    service.loadURLSWhen();
    const req = httpMock.expectOne('assets/resources/active_urls.json');
    expect(req.request.method).toEqual('GET');
    req.flush(result);
    httpMock.verify();
  });

});
