import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import Company from '../../../component/core/models/company';
import {CompanyService } from '../../../helper/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
companies: Company[];

  constructor(private cs: CompanyService) { }
  deleteCompany(id, index){
    this.cs.deleteCompany(id).subscribe(res => {
      this.companies.splice(index, 1);
    });
  }

  ngOnInit() {
    this.cs
    .getCompany()
    .subscribe((data: Company[]) => {
      this.companies = data;
      console.log(this.companies);
    });
  }

}
