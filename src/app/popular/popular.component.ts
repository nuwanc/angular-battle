import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  
  language:string = 'All';
  repos: any;

  constructor(private apiService:ApiService) {
    
   }

  ngOnInit() {
    this.fetchRepos(this.language)
  }

  onUpdateLanguage(event){
    this.language = event;
    this.repos = null;
    this.fetchRepos(this.language);
  }

  fetchRepos(language:string) {
    this.apiService.fetchPopularRepos(language).then(repos => this.repos = repos);
  }

}
