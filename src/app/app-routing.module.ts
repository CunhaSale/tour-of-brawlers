import { BrawlerDetailComponent } from './shared/components/brawler-detail/brawler-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { BrawlersComponent } from './shared/components/brawlers/brawlers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'brawlers', component: BrawlersComponent},
  { path: 'brawler/:id', component: BrawlerDetailComponent},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
