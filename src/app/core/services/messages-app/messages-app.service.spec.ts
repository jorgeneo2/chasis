import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MessagesAppService } from './messages-app.service';


describe('MessagesAppService', () => {
  let service: MessagesAppService;
  let httpMock: HttpTestingController;
  const LABELS = {
    data: {
        copies: {
            paymentsHome: {
                title: 'Pagos a terceros',
                description: 'Prueba chasis.'
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
    service = TestBed.inject(MessagesAppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadMessages() should http GET LABELS', () => {
    service.loadMessages();
    const req = httpMock.expectOne('assets/resources/copies.json');
    expect(req.request.method).toEqual('GET');
    req.flush(LABELS);
    httpMock.verify();
  });
});

describe('MessagesAppService -- dont load metadata from MetadataService', () => {
  let service: MessagesAppService;
  let httpMock: HttpTestingController;
  const LABELS = {
    data: {
        copies: {
            paymentsHome: {
                title: 'Pagos a terceros',
                description: 'Prueba chasis.'
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
    service = TestBed.inject(MessagesAppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('loadMessages() should http GET LABELS', () => {
    service.loadMessages();
    const req = httpMock.expectOne('assets/resources/copies.json');
    expect(req.request.method).toEqual('GET');
    req.flush(LABELS);
    httpMock.verify();
  });
});
