// import global modules
import { ModuleWithProviders }                from '@angular/core';
// import routers
import { Routes, RouterModule, CanActivate }  from '@angular/router';
import { AuthGuard }                          from './auth-guard.service';                        

// import mission component
import { MissionsComponent }      from './missions.component';     

// import character and character details component
import { CharactersComponent }      from './characters/characters.component';
import { CharacterDetailComponent}  from './characters/character-detail.component';
// import characters hidden behind authorisation screen
import { SecretCharactersComponent }       from './characters/secret-characters.component';
import { SecretCharacterDetailComponent }  from './characters/secret-character-detail.component';

// import bases component
import { BasesComponent }  from './bases/bases.component';

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
    path: 'secret-characters',
    component: SecretCharactersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secret-detail:id',
    component: SecretCharacterDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bases',
    component: BasesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const routedComponents = [MissionsComponent, CharactersComponent, CharacterDetailComponent, SecretCharactersComponent, SecretCharacterDetailComponent];
