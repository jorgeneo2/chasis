import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIGMAP_PARAMETERS } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {

  parametersData: any;
  parametersSecuritySso: any;

  constructor(private http: HttpClient) {
  }

  async loadParameters() {
    await this.http
      .get<any>(CONFIGMAP_PARAMETERS)
      .toPromise()
      .then((res: any) => {
        this.parametersData = res.data.parameters;
      });
  }
}
