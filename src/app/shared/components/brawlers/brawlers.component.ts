import { BrawlersService } from './../../services/brawlers.service';
import { Component, OnInit } from '@angular/core';

import { Brawler } from '../../models/brawler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brawlers',
  templateUrl: './brawlers.component.html',
  styleUrls: ['./brawlers.component.css']
})
export class BrawlersComponent implements OnInit {
  brawlers$: Observable<Brawler[]>;
  selectedBrawler: Brawler;

  constructor(private brawlersService: BrawlersService) { }

  ngOnInit() {
    this.getBrawlers();
  }

  getBrawlers() {
    this.brawlers$ = this.brawlersService.getBrawlers();
  }

}
