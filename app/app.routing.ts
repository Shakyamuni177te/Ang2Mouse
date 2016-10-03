import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';     
import { CharactersComponent }     from './characters.component';
import { CharacterDetailComponent} from './character-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
