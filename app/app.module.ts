import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }             from './app.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersComponent }      from './characters.component';
import { CharacterService }         from './character.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
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
