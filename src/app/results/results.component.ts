import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  error:string;
  winner:any;
  looser:any;
  loading:boolean = true;

  constructor(private apiService:ApiService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      let playerOneName = params['playerOneName'];
      let playerTwoName = params['playerTwoName'];

      this.apiService.battle([
            playerOneName,
            playerTwoName
        ]).then((results) => {
            if (results === null) {
                this.error = "There was an error, check that both users are in github";
                this.loading = false;
            }
            this.winner = results[0];
            this.looser = results[1];
            this.error = null;
            this.loading = false;
        })

    })
  }

}
