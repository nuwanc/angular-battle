import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http ){ }

  fetchPopularRepos(language:string):Promise<any> {
    let encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    console.log(encodedURI);
    return this._http
      .get(encodedURI)
      .toPromise()
      .then(res => res.json().items)
  }

}
