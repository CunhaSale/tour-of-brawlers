import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrawlerDetailModule } from './../brawler-detail/brawler-detail.module';
import { BrawlersComponent } from './brawlers.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ BrawlersComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrawlerDetailModule
  ],
  exports: [ BrawlersComponent ]
})
export class BrawlersModule { }
