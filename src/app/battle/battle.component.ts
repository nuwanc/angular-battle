import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  playerOneName:string = null;
  playerTwoName:string = null;
  playerOneImage = null;
  playerTwoImage = null;

  constructor() { }

  onSubmit(event) {
    if (event.id === "playerOne") {
      this.playerOneName = event.username;
      this.playerOneImage = 'https://github.com/'+event.username + '.png?size=200'; 
    }
    if (event.id === "playerTwo") {
      this.playerTwoName = event.username;
      this.playerTwoImage = 'https://github.com/'+event.username + '.png?size=200'; 
    }
  }

  onReset(id) {
    if (id === "playerOne") {
      this.playerOneName = null;
      this.playerOneImage = null;
    }
    if (id === "playerTwo") {
      this.playerTwoName = null;
      this.playerTwoImage = null;
    }
  }

  queryString():string {
    return '/battle/results?playerOneName='+this.playerOneName+'&playerTwoName='+this.playerTwoName;
  }

  ngOnInit() {
  }

}
