import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryCharacterService }  from './characters/in-memory-character.service';

import './rxjs-extensions';

import { AppComponent }             from './app.component';
import { MissionsComponent }       from './missions.component';

import { CharacterSearchComponent } from './characters/character-search.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { CharactersComponent }      from './characters/characters.component';
import { CharacterService }         from './characters/character.service';

import { BaseComponent }      from './base/base.component';
import { BaseSearchService }  from './base/base-search.service';

import { routing }                  from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryCharacterService),
    routing
  ],
  declarations: [
    AppComponent,
    MissionsComponent,
    CharacterDetailComponent,
    CharactersComponent,
    CharacterSearchComponent,
    BaseComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
