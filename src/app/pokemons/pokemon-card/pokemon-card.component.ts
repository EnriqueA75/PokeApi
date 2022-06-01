import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() results: any;

  defaultBackground: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  conditionalStyle(element: string) {
    switch (element) {
      case 'normal':
        return '#BFBFBF'
      case 'electric':
        return '#FFFF81'
      case 'water':
        return '#81FFF7'
      case 'fairy':
        return '#F7AFFC'
      case 'dark':
        return '#000000'
      case 'ghost':
        return '#59545A'
      case 'poison':
        return '#7C46B6'
      case 'rock':
        return '#B67F46'
      case 'fire':
        return '#E04343'
      case 'psychic':
        return '#8F57A1'
      case 'fighting': 
        return '#987C7B'
      default:
        return 'white';
    }
  }

}
