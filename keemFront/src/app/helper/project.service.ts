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
  editProject(id: string){
    return this.http.get(`${this.APIuri}/${id}`);


  }
updateProject( energy, air, water, tour360, footfall, certification, waste, healthNsafety,
  controle, id
){
  const obj = {
            energy,
            air,
            water,
            tour360,
            footfall,
            certification,
            waste,
            healthNsafety,
            controle,
  };
  this.http.patch(`${this.APIuri}/${id}`, obj)
  .subscribe(res => {
    console.log(' project has been updated')
  });
}
 deleteProject(id: string){
   return this.http.delete(`${this.APIuri}/${id}`);
 }

}
