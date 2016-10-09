import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

// Imports for loading & configuring databasing
import { InMemoryWebApiModule }      from 'angular2-in-memory-web-api';
import { InMemoryCharacterService }  from './characters/in-memory-character.service';
import { InMemoryBasesService }       from './bases/in-memory-bases.service';

import './rxjs-extensions';

import { AppComponent }      from './app.component';
import { MissionsComponent } from './missions.component';

import { CharacterSearchComponent } from './characters/character-search.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { CharactersComponent }      from './characters/characters.component';
import { CharacterService }         from './characters/character.service';

import { BasesComponent }      from './bases/bases.component';
import { BasesService }        from './bases/bases.service';
import { BasesSearchService }  from './bases/bases-search.service';

import { routing }                  from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryCharacterService),
    routing
  ],
  declarations: [
    AppComponent,
    MissionsComponent,
    CharacterDetailComponent,
    CharactersComponent,
    CharacterSearchComponent,
    BasesComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
