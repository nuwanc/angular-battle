import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { PopularComponent } from './popular/popular.component';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoGridComponent } from './repo-grid/repo-grid.component';
import { LoadingComponent } from './loading/loading.component';
import { PlayerInputComponent } from './player-input/player-input.component';
import { PlayerPreviewComponent } from './player-preview/player-preview.component';
import { ResultsComponent } from './results/results.component';
import { PlayerComponent } from './player/player.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'popular' , component : PopularComponent},
  {path : 'battle' , component : BattleComponent},
  {path : 'battle/results' , component : ResultsComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    PopularComponent,
    HomeComponent,
    BattleComponent,
    NavbarComponent,
    RepoGridComponent,
    LoadingComponent,
    PlayerInputComponent,
    PlayerPreviewComponent,
    ResultsComponent,
    PlayerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
