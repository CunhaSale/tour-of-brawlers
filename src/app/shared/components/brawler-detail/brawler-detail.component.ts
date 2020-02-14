import { Component, OnInit, Input } from '@angular/core';

import { Brawler } from '../../models/brawler';
import { BrawlersService } from '../../services/brawlers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-brawler-detail',
  templateUrl: './brawler-detail.component.html',
  styleUrls: ['./brawler-detail.component.css']
})
export class BrawlerDetailComponent implements OnInit {
  brawler: Brawler;
  idRouteParam: string;

  constructor(private brawlersService: BrawlersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.idRouteParam = this.route.snapshot.params.id;
    this.getBrawler();
  }

  getBrawler() {
    this.brawlersService.getBrawlers()
    .pipe(
      // tslint:disable-next-line: radix
      map(brawlers => brawlers.find(brawler => brawler.id === parseInt(this.idRouteParam))),
    ).subscribe(brawler => this.brawler = brawler);
  }

}
