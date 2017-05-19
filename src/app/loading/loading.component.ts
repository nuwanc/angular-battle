import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  text: string = 'Loading';
  speed: Number = 300;
  @Input()
  label: string = null;
  interval;
  style = { textAlign: 'center', fontSize: '35px'};

  constructor() { }

  ngOnInit() {
    
    if (this.label !== null) {
      this.text = this.label;
    }
    let stopper = this.label + '...';
    this.interval = window.setInterval(() => {
      if (this.text === stopper) {
        this.text = this.label;
      } else {
        this.text = this.text + '.';
      }
    }, this.speed);
  }

  ngOnDestroy() {
    window.clearInterval(this.interval);
  }

}
