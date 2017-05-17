import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  languages: string[] = ['All','JavaScript','Ruby','Java','CSS','Python'];
  @Input()
  selectedLanguage:string = 'All';
  @Output()
  onSelect:EventEmitter<string> = new EventEmitter<string>(); 
  
  constructor() { }

  ngOnInit() {
  }

  updateLanguage(language:string):void {
    this.selectedLanguage = language;
    this.onSelect.emit(language);
  }

}
