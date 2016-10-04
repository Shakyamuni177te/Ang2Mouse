import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';
import { CharacterSearchComponent } from './character-search.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersComponent }      from './characters.component';
import { CharacterService }         from './character.service';
import { routing }                  from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CharacterDetailComponent,
    CharactersComponent,
    CharacterSearchComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
