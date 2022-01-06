import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIGMAP_COPIES } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class MessagesAppService {
  messageData: any;
  configData: any;
  constructor(private http: HttpClient) {
  }

  async loadMessages() {
    await this.http
      .get<any>(CONFIGMAP_COPIES)
      .toPromise()
      .then((res: any) => {
        this.messageData = res.data.copies;
      });
  }
}
