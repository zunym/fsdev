import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-clientrouting';

  constructor(private route: Router) {}

  navigateToCat(){
    this.route.navigate(['/Cat'])
  }
}
