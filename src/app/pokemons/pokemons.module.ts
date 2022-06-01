import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { backgroundPipe } from './pipes/background.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent,
    backgroundPipe
  ],
  exports: [
    FavoritesPageComponent,
    HomePageComponent,
    PokemonCardComponent,
    backgroundPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PokemonsModule { }
