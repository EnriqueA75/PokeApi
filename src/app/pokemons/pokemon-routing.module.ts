import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DetailedPokemonComponent } from './detailed-pokemon/detailed-pokemon.component';
import { RandomPokemonPageComponent } from './random-pokemon-page/random-pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'favorites', component: FavoritesPageComponent },
      { path: 'random/:id', component: RandomPokemonPageComponent },
      { path: 'pokemon/:id', component: DetailedPokemonComponent}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
