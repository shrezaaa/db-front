import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
  constructor(private gs: GlobalService) {}

  getPublishers() {
    return ApiRequest('GET', true)
      .controller('publishers')
      .action('')
      .call(this.gs);
  }

  addPublisher(model) {
    return ApiRequest("POST", true)
      .controller("publishers")
      .action("add")
      .addBodies(model)
      .call(this.gs);
  }

  deletePublisher(PublisherID) {
    return ApiRequest("DELETE", true)
      .controller("Publisher")
      .action("Delete")
      .addParam("PublisherID", PublisherID)
      .call(this.gs);
  }
}
