import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg = 'Github Battle:Battle your friends and Stuff...';
  
  constructor() { }

  ngOnInit() {
  }

}
