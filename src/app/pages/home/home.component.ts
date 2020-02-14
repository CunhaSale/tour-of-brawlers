import { Brawler } from './../../shared/models/brawler';
import { BrawlersService } from './../../shared/services/brawlers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brawlers$: Observable<Brawler[]>;

  constructor(private brawlersService: BrawlersService) { }

  ngOnInit() {
    this.getBrawlers();
  }

  getBrawlers() {
    this.brawlers$ = this.brawlersService.getBrawlers()
    .pipe(
      map(brawler => brawler.slice(1, 5))
    );
  }
}
