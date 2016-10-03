import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersComponent }      from './characters.component';
import { CharacterService }         from './character.service';
import { routing }                  from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterDetailComponent,
    CharactersComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
