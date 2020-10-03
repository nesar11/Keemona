import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../../../helper/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,
              private ss: ServiceService,
              private router: Router,) {
                this.createForm()
              }

  createForm(){
    this.angForm = this.fb.group({
      serviceName: ['', Validators.required],
      serviceKeeCode: ['', Validators.required],
      description: ['', Validators.required],
      specifications: ['', Validators.required],
      moreInfo: ['', Validators.required],
    });
  }
  addService(serviceName, serviceKeeCode, description, specifications, moreInfo  ){
    this.ss.addService(serviceName, serviceKeeCode, description, specifications, moreInfo);
    this.router.navigate(['services']);

  }

  ngOnInit(): void{
  }

}
