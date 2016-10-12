// import global modules
import { ModuleWithProviders }  from '@angular/core';
// import routers
import { Routes, RouterModule } from '@angular/router';

// import mission component
import { MissionsComponent }      from './missions.component';     

// import character and character details component
import { CharactersComponent }     from './characters/characters.component';
import { CharacterDetailComponent} from './characters/character-detail.component';

// import bases component
import { BasesComponent } from './bases/bases.component';

// basic application routing (which URL maps to which component)
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
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
    path: 'bases',
    component: BasesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
