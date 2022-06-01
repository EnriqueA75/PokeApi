import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'backgroundPokemon'
})
export class backgroundPipe implements PipeTransform {

    transform(element: string = 'white') {
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
                return '#F9AAAA'
            default:
                return 'white';
        }
    }

}