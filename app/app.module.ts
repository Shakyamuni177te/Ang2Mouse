import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CharacterDetailComponent } from './character-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CharacterDetailComponent
  ],
  bootstrap: [
     AppComponent 
  ]
})

export class AppModule { }
