import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIGMAP_BUSINESS_RULES } from 'src/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class BusinessRulesService {

  rulesData: any;

  constructor(private http: HttpClient) {
  }

  async loadBusinessRules() {
    await this.http
      .get<any>(CONFIGMAP_BUSINESS_RULES)
      .toPromise()
      .then((res: any) => {
        this.rulesData = res.data.businessRules;
      });
  }
}
