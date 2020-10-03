import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:3200/api/services';

  constructor(private http: HttpClient) { }
  addService(serviceName, serviceKeeCode,  description, specifications, moreInfo ) {
      const obj = {
        serviceName,
        serviceKeeCode,
        description,
        specifications,
        moreInfo,
      };
      console.log(obj);
      this.http.post(`${this.uri}/`, obj)
      .subscribe(res =>
        console.log('Done'))

  }
  getService(){
    return this.http.get(`${this.uri}`);
  }

  editService(id){
  return this.http.get(`${this.uri}/${id}`);
  }

  updateService(serviceName, serviceKeeCode,  description, specifications, moreInfo, id ){
    const obj = {
      serviceName,
      serviceKeeCode,
      description,
      specifications,
      moreInfo
    };
    this
      .http
      .patch(`${this.uri}/${id}`, obj)
      .subscribe(res =>
        console.log('Done'));

  }
  deleteService(id){
    return this
    .http
    .get(`${this.uri}/${id}`);

  }
}


