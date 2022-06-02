import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/interface/modal';
import { PokeService } from '../../pokemons/services/poke.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})

export class ConfirmationModalComponent implements OnInit {

  @Input() modalContent = {} as Modal;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
  }

  closeModal() {
    console.log('presionando el modal')
    this.pokeService.handleModalView();
  }

}
