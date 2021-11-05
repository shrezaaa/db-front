import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private gs: GlobalService) {}

  getAuthors() {
    return ApiRequest('GET', true)
      .controller('authors')
      .action('')
      .call(this.gs);
  }
}
