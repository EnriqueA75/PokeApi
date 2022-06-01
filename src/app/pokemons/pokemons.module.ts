import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent
  ],
  exports: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PokemonsModule { }
