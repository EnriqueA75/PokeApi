import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  modalContent = {
    gifUrl: 'https://media2.giphy.com/media/UHAYP0FxJOmFBuOiC2/200w.gif?cid=82a1493b05x1bcijfqjga2k9li84ngnz41vwgcq67zratut8&rid=200w.gif&ct=g',
    textContent: 'sorry, there is not pokemon with this name. :('
  }

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
