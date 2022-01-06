import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ParametersService } from './parameters.service';


describe('ParametersService', () => {
  let service: ParametersService;
  let httpMock: HttpTestingController;
  const PARAMETERS_APP = {
    data: {
      parameters: {
        headers: {
            application: 'Chasis PagosPJ'
        }
    }
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(ParametersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadParameters() should http GET PARAMETERS_APP', () => {
    service.loadParameters();
    const req = httpMock.expectOne('assets/resources/application_parameters.json');
    expect(req.request.method).toEqual('GET');
    req.flush(PARAMETERS_APP);
    httpMock.verify();
  });
});

describe('ParametersService -- dont load metadata from MetadataService', () => {
  let service: ParametersService;
  let httpMock: HttpTestingController;
  const PARAMETERS_APP = {
    data: {
      parameters: {
        headers: {
            application: 'Chasis PagosPJ'
        }
    }
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(ParametersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadParameters() should http GET PARAMETERS_APP', () => {
    service.loadParameters();
    const req = httpMock.expectOne('assets/resources/application_parameters.json');
    expect(req.request.method).toEqual('GET');
    req.flush(PARAMETERS_APP);
    httpMock.verify();
  });
});
