import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private pokeService: PokeService) { }

  get results() {
    return this.pokeService.actualPokemon;
  }

  ngOnInit(): void {
  }

}
