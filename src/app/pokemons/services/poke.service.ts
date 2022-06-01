import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _pokemonHistorial: any[] = [];

  public actualPokemon: any;
  // public actualPokemonName: string;

  get historial() {
    return [this._pokemonHistorial];
  }

  constructor(private http: HttpClient){}

  searchPokemon(query: string){
    query = query.toLocaleLowerCase().trim();
    if(!this._pokemonHistorial.includes(query)){
      this._pokemonHistorial.unshift( query )
    }
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .subscribe( resp => {
        this.actualPokemon = resp;
        console.log(resp)
      })
  }
}
