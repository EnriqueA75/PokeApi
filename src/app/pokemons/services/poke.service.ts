import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _pokemonHistorial: any[] = [];

  public actualPokemon: any;

  public isPokemon: boolean = true;

  public favoritesPokemon: any[] = [];

  public isModalOpen: boolean = false;

  // public actualPokemonName: string; 

  get historial() {
    return [this._pokemonHistorial];
  }

  get favorites() {
    return [...this.favoritesPokemon];
  }

  handleModalView(){
    console.log('desde handleModalView')
    this.isModalOpen = !this.isModalOpen;
  }

  constructor(private http: HttpClient){
    this.favoritesPokemon = JSON.parse(localStorage.getItem('favorites')!) || [];
  }
  pokemonExisting(pokemonId: number) {
    const exist = this.favoritesPokemon.filter(pokemon => {
      return pokemon.id == pokemonId
    })
    return exist;
  }
  deletePokemon(pokemonId: number) {
    this.favoritesPokemon = this.favoritesPokemon.filter(pokemon => {
      return pokemon.id !== pokemonId
    })
    localStorage.setItem('favorites', JSON.stringify(this.favoritesPokemon))
  }

  searchPokemon(query: string){
    query = query.toLowerCase().trim();
    if(!this._pokemonHistorial.includes(query)){
      this._pokemonHistorial.unshift( query )
    }
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .subscribe( resp => {
        this.actualPokemon = resp;
        this.isPokemon = true;
      },
      err => {
        if(err){
          this.isPokemon = false;
          this.handleModalView()
        }
      })
  }
  addFavorite(pokemon: any){
    const existingPokemon = this.favoritesPokemon.filter(pok => {
      return pok.id === pokemon.id
    })
    if(!existingPokemon.length){
      this.favoritesPokemon.unshift(pokemon)
      localStorage.setItem('favorites', JSON.stringify(this.favoritesPokemon))
    }
  } 
}
