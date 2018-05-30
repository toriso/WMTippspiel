import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { BetPageComponent } from './pages/bet-page/bet-page.component';
import { BettingTablePageComponent } from './pages/betting-table-page/betting-table-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'bet', component: BetPageComponent },
  { path: 'bettingTable', component: BettingTablePageComponent },
  { path: 'rating', component: ScorePageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  { path: '404', component: PageNotFoundPageComponent },
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
