import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  
  get favorites() {
    return this.pokeService.favoritesPokemon;
  }
  constructor(
    private pokeService: PokeService,
    private router:Router
  ) {}

  currentPage(){
    return this.router.url;
  }

  ngOnInit(): void {
  }

}
