import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GlobalService } from 'src/app/core/services/global.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private gs: GlobalService) {
    console.log(4);
    
  }
}
