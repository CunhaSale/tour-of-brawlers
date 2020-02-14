import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// layout&&pages modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './layout/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { BrawlersModule } from './shared/components/brawlers/brawlers.module';
import { BrawlerDetailModule } from './shared/components/brawler-detail/brawler-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    HomeModule,
    BrawlersModule,
    AppRoutingModule,
    BrawlerDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
