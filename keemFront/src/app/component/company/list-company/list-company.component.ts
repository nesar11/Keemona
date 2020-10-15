import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.cs
    .getCompanies()
    .subscribe((cdata: Company[]) =>{
      this.companies = cdata;
      console.log(this.companies);
    });
  }

}
