import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    PokemonCardComponent
  ]
})
export class SharedModule { }
