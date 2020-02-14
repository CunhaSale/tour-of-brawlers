import { RouterModule } from '@angular/router';
import { BrawlersModule } from './../../shared/components/brawlers/brawlers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrawlersModule
  ],
  exports: [ HomeComponent ]
})

export class HomeModule { }
