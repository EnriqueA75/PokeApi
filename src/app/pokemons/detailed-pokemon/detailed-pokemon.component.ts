import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, pipe } from 'rxjs';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-detailed-pokemon',
  templateUrl: './detailed-pokemon.component.html',
  styleUrls: ['./detailed-pokemon.component.css']
})
export class DetailedPokemonComponent implements OnInit {

  pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.pokeService.getPokemonDetails(id))
      )
      .subscribe((pokemon) => this.pokemon = pokemon)
  }

}
