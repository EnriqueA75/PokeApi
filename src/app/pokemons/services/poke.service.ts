import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  public actualPokemon: any;

  public isPokemon: boolean = true;

  public favoritesPokemon: any[] = [];
  // public actualPokemonName: string;

  get favorites() {
    return [...this.favoritesPokemon];
  }

  constructor(private http: HttpClient){
    this.favoritesPokemon = JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  closeModalView(){
    this.isPokemon = true;
  }

  searchPokemon(query: string){
    query = query.toLowerCase().trim();
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
    console.log(existingPokemon)
    if(!existingPokemon){
      this.favoritesPokemon.unshift(pokemon)
      localStorage.setItem('favorites', JSON.stringify(this.favoritesPokemon))
      console.log(pokemon)
    }
  } 
}
