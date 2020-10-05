import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ProjectService} from '../../../helper/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
angForm: FormGroup;

isLoadingResults = false;
  constructor(private fb: FormBuilder,
              private ps: ProjectService,
              private router: Router) {
                this.creaeForm()
              }
   creaeForm(){
     this.angForm = this.fb.group({
      energy: ['', Validators.required],
      air: ['', Validators.required],
      water: ['', Validators.required],
      tour360: ['', Validators.required],
      certification: ['', Validators.required],
      waste: ['', Validators.required],
      healthNsafety: ['', Validators.required],
      controle: ['', Validators.required],
     });

     }
     AddProject(energy, air, water, tour360, footfall, certification, procurement, waste, healthNsafety, controle,){
        this.ps.addProject(energy,
          air, water, tour360, footfall, certification, procurement, waste, healthNsafety, controle);
        this.router.navigate(['projects']);
        console.log('product created')

   }
  ngOnInit() {
  }

}
