import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PokeService } from '../pokemons/services/poke.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtSearchPk') txtSearchPk!:ElementRef<HTMLInputElement>;

  searchPk(){
    const value = this.txtSearchPk.nativeElement.value;
    if(value.trim().length === 0){
      return;
    }
    this.pokeService.searchPokemon(value);
    this.txtSearchPk.nativeElement.value = '';
  }

}
