import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private pokeService: PokeService,
    private router:Router
  ) { }

  get results() {
    return this.pokeService.actualPokemon;
  }

  get pokemonFound() {
    return this.pokeService.isPokemon;
  }

  currentPage(){
    return this.router.url;
  }

  ngOnInit(): void {
  }

}
