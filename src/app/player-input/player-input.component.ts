import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent implements OnInit {

  username:string;
  @Input()
  label:string;
  @Input()
  id:string;
  @Output()
  onSubmit:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSubmit.emit({id:this.id,username:this.username});
  }
}
