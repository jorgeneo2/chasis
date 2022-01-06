import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BusinessRulesService } from './business-rules.service';


describe('BusinessRulesService', () => {
  let service: BusinessRulesService;
  let httpMock: HttpTestingController;
  const BUSINESS_RULES = {
    data: {
      businessRules : {
          testConfigMaps: 'ValorConfigMaps'
      }
  }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(BusinessRulesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadBusinessRules() should http GET BUSINESS_RULES', () => {
    service.loadBusinessRules();
    const req = httpMock.expectOne('assets/resources/business_rules.json');
    expect(req.request.method).toEqual('GET');
    req.flush(BUSINESS_RULES);
    httpMock.verify();
  });
});

describe('BusinessRulesService -- dont load metadata from MetadataService', () => {
  let service: BusinessRulesService;
  let httpMock: HttpTestingController;
  const BUSINESS_RULES = {
    data: {
      businessRules : {
          testConfigMaps: 'ValorConfigMaps'
      }
  }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(BusinessRulesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadBusinessRules() should http GET BUSINESS_RULES', () => {
    service.loadBusinessRules();
    const req = httpMock.expectOne('assets/resources/business_rules.json');
    expect(req.request.method).toEqual('GET');
    req.flush(BUSINESS_RULES);
    httpMock.verify();
  });
});
