import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {ProjectService} from '../../../helper/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  angProForm: FormGroup;
  project: any = {};
  doc: any;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private ps: ProjectService,
               private fb: FormBuilder) {
                this.createForm();
    }

    createForm(){
      this.angProForm = this.fb.group({
       energy: ['', Validators.required],
       air: ['', Validators.required],
       water: ['', Validators.required],
       tour360: ['', Validators.required],
       footfall: ['', Validators.required],
       certification: ['', Validators.required],
       waste: ['', Validators.required],
       healthNsafety: ['', Validators.required],
       controle: ['', Validators.required],
      });
    }
updateProject(energy, air, water, tour360, footfall, certification, waste, healthNsafety, controle){
   this.route.params.subscribe(params =>{
     this.ps.updateProject(energy, air, water, tour360, footfall, certification, waste, healthNsafety,
      controle, params.id);
     this.router.navigate(['projects']);
   });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.ps.editProject(params[`id`]).subscribe(res => {
        this.project = res;

        console.log('hello', this.project);
        this.doc = this.project.result;
        console.log('doc', this.doc);

      });
    })
  }

}
