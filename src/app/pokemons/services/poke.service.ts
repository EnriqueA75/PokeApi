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
  // public actualPokemonName: string;

  get historial() {
    return [this._pokemonHistorial];
  }

  get favorites() {
    return [...this.favoritesPokemon];
  }

  closeModalView(){
    this.isPokemon = true;
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
        this.isPokemon = true;
      },
      err => {
        if(err){
          this.isPokemon = false;
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
