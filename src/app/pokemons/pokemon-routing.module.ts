import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DetailedPokemonComponent } from './detailed-pokemon/detailed-pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'favorites', component: FavoritesPageComponent },
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
