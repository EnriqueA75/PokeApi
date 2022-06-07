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

}
