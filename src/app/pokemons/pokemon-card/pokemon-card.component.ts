import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() results: any;
  @Input() currentPage: string = '';

  defaultBackground: string = 'white';
  isFavModalOpen: boolean = false;
  isDelModalOpen: boolean = false;

  constructor(private pokeService: PokeService) { }

  addToFavorite(pokemon: any){
    if(pokemon){
      this.pokeService.addFavorite(pokemon)
      this.pokeService.handleModalView();
    }
  }

  deleteFavorite(pokemonId: number){
    if(pokemonId){
      this.pokeService.deletePokemon(pokemonId)
      this.pokeService.handleModalView();
    }
  }

  existingPokemonCheck(pokemonId: number) {
    return this.pokeService.pokemonExisting(pokemonId);
  }

  ngOnInit(): void {
  }

  conditionalStyle(element: string) {
    switch (element) {
      case 'normal':
        return '#BFBFBF'
      case 'electric':
        return '#FFFF81'
      case 'water':
        return '#81FFF7'
      case 'fairy':
        return '#F7AFFC'
      case 'dark':
        return '#000000'
      case 'ghost':
        return '#59545A'
      case 'poison':
        return '#7C46B6'
      case 'rock':
        return '#B67F46'
      case 'fire':
        return '#E04343'
      case 'psychic':
        return '#8F57A1'
      case 'fighting': 
        return '#987C7B'
      default:
        return 'white';
    }
  }

}
