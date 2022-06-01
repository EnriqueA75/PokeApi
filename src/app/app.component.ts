import { Component } from '@angular/core';
import { PokeService } from './pokemons/services/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeApiApp';

  constructor(private pokeService: PokeService) { }

  get pokemons() {
    return this.pokeService.historial[0];
  }
}
