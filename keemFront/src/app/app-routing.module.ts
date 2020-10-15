import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './component/auth/user/signup/signup.component';
import { LoginComponent } from './component/auth/user/login/login.component';
import { UserListComponent } from './component/auth/user/user-list/user-list.component';
import { ProfileComponent} from './component/auth/user/profile/profile.component';

import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { AddServiceComponent } from './component/service/add-service/add-service.component';
import { UpdateServiceComponent } from './component/service/update-service/update-service.component';
import {DetailsServiceComponent} from './component/service/details-service/details-service.component';

import { UpdateProjectComponent } from './component/project/update-project/update-project.component';
import { ListProjectComponent } from './component/project/list-project/list-project.component';
import { AddProjectComponent } from './component/project/add-project/add-project.component';
import { DetailsProjectComponent} from './component/project/details-project/details-project.component';


import { AddCompanyComponent } from './component/company/add-company/add-company.component';
import { ListCompanyComponent } from './component/company/list-company/list-company.component';
import { UpdateCompanyComponent } from './component/company/update-company/update-company.component';
import {DetailsCompanyComponent} from './component/company/details-company/details-company.component';



const routes: Routes = [

  {path: 'auth/register', component: SignupComponent },
  {path: 'auth/login', component: LoginComponent },
  {path: 'auth/users', component: UserListComponent },
  {path: 'auth/profile/:id', component: ProfileComponent },

  {path: 'company/create', component: AddCompanyComponent },
  {path: 'company/update', component: UpdateCompanyComponent },
  {path: 'companies', component: ListCompanyComponent },
  {path: 'company/details', component: DetailsCompanyComponent },

  {path: 'project/create', component: AddProjectComponent },
  {path: 'projects', component: ListProjectComponent },
  {path: 'projects/:id', component: UpdateProjectComponent },
  {path: 'projects/details', component: DetailsProjectComponent },

  {path: 'service/create', component: AddServiceComponent },
  {path: 'services', component: ListServiceComponent },
  {path: 'services/:id', component: UpdateServiceComponent },
  {path: 'service/details', component: DetailsServiceComponent },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
