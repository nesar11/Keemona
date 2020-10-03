import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';


import { SignupComponent } from './component/auth/user/signup/signup.component';
import { LoginComponent } from './component/auth/user/login/login.component';
import { UserListComponent } from './component/auth/user/user-list/user-list.component';

import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { AddServiceComponent } from './component/service/add-service/add-service.component';
import { UpdateServiceComponent } from './component/service/update-service/update-service.component';

import { UpdateProjectComponent } from './component/project/update-project/update-project.component';
import { ListProjectComponent } from './component/project/list-project/list-project.component';
import { AddProjectComponent } from './component/project/add-project/add-project.component';

import { AddCompanyComponent } from './component/company/add-company/add-company.component';
import { ListCompanyComponent } from './component/company/list-company/list-company.component';
import { UpdateCompanyComponent } from './component/company/update-company/update-company.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TopHeaderComponent} from './component/top-header/top-header.component';

import {MaterialModule} from './component/core/material/material.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { HttpClientModule } from '@angular/common/http';

import {CompanyService} from './helper/company.service';
import {ProjectService} from './helper/project.service';
import {ServiceService} from './helper/service.service';
import {UserService} from './helper/user.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    UserListComponent,
    ListServiceComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    UpdateProjectComponent,
    ListProjectComponent,
    AddProjectComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    UpdateCompanyComponent,
    TopHeaderComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SlimLoadingBarModule,
    HttpClientModule

  ],
  providers: [CompanyService, ProjectService, ServiceService, UserService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
