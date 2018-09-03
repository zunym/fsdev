import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-promise';
  private results = [];

  constructor(private http: HttpClient) {}

  private search(term){
    console.log(term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`)
      .toPromise()
      .then((data: any)=>{
        console.log(data);
        this.results = data.results;
      })
  }
}