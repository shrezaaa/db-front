import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private gs:GlobalService) { }



  getCustomers() {
    return ApiRequest('GET', true)
      .controller('customers')
      .action('')
      .call(this.gs);
  }



}
