import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EndpointService } from './endpoint.service';


describe('EndpointService', () => {
  let service: EndpointService;
  let httpMock: HttpTestingController;
  const ENDPOINTS = {
    urls: {
      portalPJ: 'https://portalqa-uno.itauco.col:10443/empresas'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(EndpointService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadURLS() should http GET ENDPOINTS', () => {

    service.loadURLS();

    const req = httpMock.expectOne('assets/resources/context.urls.json');
    expect(req.request.method).toEqual('GET');
    req.flush(ENDPOINTS);

    httpMock.verify();
  });
});

describe('EndpointService -- dont load metadata from MetadataService', () => {
  let service: EndpointService;
  let httpMock: HttpTestingController;
  const ENDPOINTS = {
    urls: {
      portalPJ: 'https://portalqa-uno.itauco.col:10443/empresas'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(EndpointService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadURLS() should http GET ENDPOINTS', () => {

    service.loadURLS();

    const req = httpMock.expectOne('assets/resources/context.urls.json');
    expect(req.request.method).toEqual('GET');
    req.flush(ENDPOINTS);

    httpMock.verify();
  });
});
