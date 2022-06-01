import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _pokemonHistorial: any[] = [];

  public actualPokemon: any;

  public isPokemon: boolean = false;

  public favoritesPokemon: any[] = [];
  // public actualPokemonName: string;

  get historial() {
    return [this._pokemonHistorial];
  }

  get favorites() {
    return [...this.favoritesPokemon];
  }

  constructor(private http: HttpClient){
    this.favoritesPokemon = JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  searchPokemon(query: string){
    query = query.toLowerCase().trim();
    if(!this._pokemonHistorial.includes(query)){
      this._pokemonHistorial.unshift( query )
    }
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .subscribe( resp => {
        this.actualPokemon = resp;
        this.isPokemon = false;
      },
      err => {
        if(err){
          this.isPokemon = true;
        }
      })
  }
  addFavorite(pokemon: any){
    if(!this.favoritesPokemon.includes(pokemon)){
      this.favoritesPokemon.unshift(pokemon)
      localStorage.setItem('favorites', JSON.stringify(this.favoritesPokemon))
      console.log(pokemon)
    }
  } 
}
