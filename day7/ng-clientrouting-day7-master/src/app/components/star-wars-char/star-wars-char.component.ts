import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwcharService } from '../../swchar.service';

@Component({
  selector: 'app-star-wars-char',
  templateUrl: './star-wars-char.component.html',
  styleUrls: ['./star-wars-char.component.css']
})
export class StarWarsCharComponent implements OnInit {

  constructor(private swSvc: SwcharService, private route:Router) { }
  results = [];

  ngOnInit() {
    this.results = this.swSvc.getCharacters();
  }

  getSWCharDetails(charId){
    this.route.navigate(['/swCharDetails', charId])
  }

}
