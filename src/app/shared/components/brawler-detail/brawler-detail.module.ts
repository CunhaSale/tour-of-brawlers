import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrawlerDetailComponent } from './brawler-detail.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ BrawlerDetailComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ BrawlerDetailComponent ]
})

export class BrawlerDetailModule { }
