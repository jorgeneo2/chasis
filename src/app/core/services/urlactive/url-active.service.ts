import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIGMAP_ACTIVE_URLS } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UrlActiveService {
  urls: any;

  constructor(private http: HttpClient) { }

  async loadURLSWhen() {
    await this.http
      .get<any>(CONFIGMAP_ACTIVE_URLS)
      .toPromise()
      .then((res: any) => {
        this.urls = res.active_when;
      });
  }
}
