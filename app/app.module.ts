// import internal Angular2 components
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// imports for loading and configuring databasing
import { InMemoryWebApiModule }      from 'angular-in-memory-web-api';
import { InMemoryCharacterService }  from './characters/in-memory-character.service';
import { InMemoryBasesService }       from './bases/in-memory-bases.service';

// import observable related functions
import './rxjs-extensions';

// import global app component
import { AppComponent }      from './app.component';

// missioning related imports
import { MissionsComponent } from './missions.component';

// character related imports
import { CharacterSearchComponent } from './characters/character-search.component';
import { CharacterDetailComponent } from './characters/character-detail.component';
import { CharactersComponent }      from './characters/characters.component';
import { CharacterService }         from './characters/character.service';

// base admin related imports
import { BasesComponent }      from './bases/bases.component';
import { BasesService }        from './bases/bases.service';
import { BasesSearchService }  from './bases/bases-search.service';

// imports application routing
import { routing }  from './app.routing';

// define module scope: 'imports:' are global functions imported 
// from the main Angular2 libraries; 'declarations:' defines 
// component modules created elsewhere in the app; 'providers:'
// defines services which move data from one part of the app
// to another, and 'bootstrap:' defines the entrypoint(s)
// for the application

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
    BasesComponent
  ],
  providers: [
    CharacterService,
    BasesServices
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
