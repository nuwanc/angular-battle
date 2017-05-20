import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-preview',
  templateUrl: './player-preview.component.html',
  styleUrls: ['./player-preview.component.css']
})
export class PlayerPreviewComponent implements OnInit {

  @Input()
  username:string;
  @Input()
  avatar:string;

  constructor() { }

  ngOnInit() {
  }

}
