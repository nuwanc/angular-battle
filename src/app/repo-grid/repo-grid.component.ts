import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'repo-grid',
  templateUrl: './repo-grid.component.html',
  styleUrls: ['./repo-grid.component.css']
})
export class RepoGridComponent implements OnInit {

  @Input()
  repos : any[];

  constructor() { }

  ngOnInit() {
  }

}
