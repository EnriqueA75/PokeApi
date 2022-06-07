import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';
import { Modal } from 'src/app/interface/modal';
import { Message } from 'src/app/interface/message';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  openTheErrorModal: boolean = false;

  modalContent = {} as Modal;

  modalInformation(){
    if(!this.pokeService.isPokemon){
      return this.modalContent = {
        gifUrl: 'https://media2.giphy.com/media/UHAYP0FxJOmFBuOiC2/200w.gif?cid=82a1493b05x1bcijfqjga2k9li84ngnz41vwgcq67zratut8&rid=200w.gif&ct=g',
        textContent: 'sorry, there is not pokemon with this name. :('
      }
    } else {
      return this.modalContent = {
        gifUrl: 'https://i.pinimg.com/originals/fb/2c/56/fb2c56a4b5b055f1e5b0adab5a7593c5.gif',
        textContent: 'Added to your favorites!'
      }
    }
  }

  messageContent: Message = {
    title: "Search Pokemons!",
    bodyText: 'Pokémon is short for Pocket Monsters, the original Japanese name. The franchise has its roots in a gaming magazine in the early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken Sugimori',
    informationImage: 'https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif'
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
  get isThemodalOpen() {
    return this.pokeService.isModalOpen;
  }

  currentPage(){
    return this.router.url;
  }

  ngOnInit(): void {
  }

}
