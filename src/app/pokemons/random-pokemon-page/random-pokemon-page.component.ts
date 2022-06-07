import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-random-pokemon-page',
  templateUrl: './random-pokemon-page.component.html',
  styleUrls: ['./random-pokemon-page.component.css']
})
export class RandomPokemonPageComponent implements OnInit {

  modalContent = {
    gifUrl: 'https://i.pinimg.com/originals/fb/2c/56/fb2c56a4b5b055f1e5b0adab5a7593c5.gif',
    textContent: 'Added to your favorites!'
  }

  pokemon: any;
  isErrorPage: boolean = false;

  constructor(
    private pokeService: PokeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.pokeService.getPokemonDetails(id))
      )
      .subscribe((pokemon) => {this.pokemon = pokemon}, 
      err => {
        this.isErrorPage = err;
      })
  }

  currentPage(){
    return this.router.url;
  }

  get isThemodalOpen() {
    return this.pokeService.isModalOpen;
  }


}
