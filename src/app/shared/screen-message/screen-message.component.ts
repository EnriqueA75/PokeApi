import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interface/message';

@Component({
  selector: 'app-screen-message',
  templateUrl: './screen-message.component.html',
  styleUrls: ['./screen-message.component.css']
})
export class ScreenMessageComponent implements OnInit {

  @Input() messageContent = {} as Message;

  constructor() { }

  ngOnInit(): void {
  }

}
