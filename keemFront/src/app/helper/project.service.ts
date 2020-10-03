import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  APIuri = 'http://localhost:3200/api/projects';

  constructor(private http: HttpClient) { }
  addProject(energy, air, water, tour360, footfall, certification, procurement, waste, healthNsafety, controle,){
    const obj = {
      energy,
      air,
      water,
      tour360,
      footfall,
      certification,
      procurement,
      waste,
      healthNsafety,
      controle,
    };
    console.log(obj);
    this.http.post(`${this.APIuri}/`, obj)
    .subscribe(res =>{
      console.log('Project Created')
    });

  }
  getProject(){
    return this.http.get(`${this.APIuri}`);
  }
  // editProject(id){
  //   return this.http.get(`${this.uri}/${id}`);
  // }



}
