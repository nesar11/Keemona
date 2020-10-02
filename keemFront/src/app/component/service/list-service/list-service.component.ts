import { Component, OnInit } from '@angular/core';

import Service from '../../core/models/Service';
import { ServiceService} from '../../../helper/service.service';
@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services: Service[];
  constructor( private ss: ServiceService) { }


  deleteService(id, index) {
    this.ss.deleteService(id).subscribe(res => {
      this.services.slice(index, 1);
      console.log('res', "server has been remove successfully")
    });
}

  ngOnInit() {
    this.ss
            .getService()
            .subscribe((data: Service[]) => {
              this.services = data;
              console.log(this.services);
             });
         }

}
