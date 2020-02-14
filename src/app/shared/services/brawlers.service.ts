import { Injectable } from '@angular/core';

import { Brawlers } from './../models/mock-brawlers';
import { Brawler } from './../models/brawler';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrawlersService {

  constructor() { }

  getBrawlers(): Observable<Brawler[]> {
    return of(Brawlers);
  }
}
