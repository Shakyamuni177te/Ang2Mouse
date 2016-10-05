import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsComponent }      from './missions.component';     

import { CharactersComponent }     from './characters/characters.component';
import { CharacterDetailComponent} from './characters/character-detail.component';

import { BaseComponent } from './base/base.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/missions',
    pathMatch: 'full'
  },
  {
    path: 'missions',
    component: MissionsComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'base',
    component: BaseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
