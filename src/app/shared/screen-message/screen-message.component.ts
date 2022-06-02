import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-message',
  templateUrl: './screen-message.component.html',
  styleUrls: ['./screen-message.component.css']
})
export class ScreenMessageComponent implements OnInit {

  @Input() messageContent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
