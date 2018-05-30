import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BetPageComponent } from './pages/bet-page/bet-page.component';
import { BettingTablePageComponent } from './pages/betting-table-page/betting-table-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BetPageComponent,
    BettingTablePageComponent,
    SchedulePageComponent,
    HomePageComponent,
    PageNotFoundPageComponent,
    ScorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
