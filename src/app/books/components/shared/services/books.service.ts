import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private gs: GlobalService) {}

  getBooks() {
    return ApiRequest('GET', true)
      .controller('book')
      .action('')
      .call(this.gs);
  }
}
