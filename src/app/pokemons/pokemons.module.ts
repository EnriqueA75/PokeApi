import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SharedModule } from '../shared/shared.module';
import { DetailedPokemonComponent } from './detailed-pokemon/detailed-pokemon.component';
import { RandomPokemonPageComponent } from './random-pokemon-page/random-pokemon-page.component';


@NgModule({
  declarations: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent,
    DetailedPokemonComponent,
    RandomPokemonPageComponent,
  ],
  exports: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent,
    DetailedPokemonComponent,
    RandomPokemonPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule
  ]
})
export class PokemonsModule { }
