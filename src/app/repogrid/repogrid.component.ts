import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'repo-grid',
  templateUrl: './repogrid.component.html',
  styleUrls: ['./repogrid.component.css']
})
export class RepogridComponent implements OnInit {

  @Input()
  repos : any[];

  constructor() { }

  ngOnInit() {
  }

}
