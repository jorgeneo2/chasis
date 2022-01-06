import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIGMAP_ENDPOINT_URLS } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  urls: any;

  constructor(private http: HttpClient) {}

  async loadURLS() {
    await this.http
      .get<any>(CONFIGMAP_ENDPOINT_URLS)
      .toPromise()
      .then((res: any) => {
        this.urls = res.urls;
      });
    return this.urls;
  }
}
