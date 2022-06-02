import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';
import { Message } from 'src/app/interface/message';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  messageContent: Message = {
    title: "You dont have any favorite pokemon!",
    bodyText: 'Start searching for a pokemons and add your favorites to the list :D',
    informationImage: 'https://i.pinimg.com/originals/83/0b/53/830b53f8bbd0e9dbcade87da95abdad0.gif'
  }
  
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
