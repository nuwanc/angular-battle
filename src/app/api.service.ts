import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http ){ }

  fetchPopularRepos(language:string):Promise<any> {
    let encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return this._http
      .get(encodedURI)
      .toPromise()
      .then(res => res.json().items)
  }

  battle(players) {
    return Promise.all(players.map(this.getUserData.bind(this))).then(this.sortPlayers).catch(this.handleError);
  }

  getProfile(username):Promise<any> {
    return this._http
    .get('https://api.github.com/users/'+username)
    .toPromise()
    .then((user)=>{ return user.json();})
  }

  getRepos(username):Promise<any> {
    return this._http.get('https://api.github.com/users/'+ username + '/repos?per_page=100')
    .toPromise()
    .then((repos)=> {return repos.json();});
  }

  getUserData(player):Promise<any> {
    return Promise.all([this.getProfile(player),this.getRepos(player)])
    .then((data)=>{
        let profile = data[0];
        let repos = data[1];

        return {
            profile : profile,
            score : this.calculateScore(profile,repos)
        };
    })
  }

  calculateScore(profile,repos) {
    let followers = profile.followers;
    let totalStars = this.getStarCount(repos);

    return (followers * 3) + totalStars;
}

  getStarCount(repos) {
    return repos.reduce((count,repo)=>{
        return count + repo.stargazers_count;
    },0)
  }

  sortPlayers(players) {
    return players.sort((a,b)=>{
        return b.score - a.score;
    });
  }

  handleError(error) {
    console.warn(error);
    return null;
  }

}
