import { Component, OnInit, ViewChild } from '@angular/core';
//import { FormsModule } from '@angular/forms'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-rstv',
  templateUrl: './rstv.component.html',
  styleUrls: ['./rstv.component.css']
})
export class RstvComponent implements OnInit {
  title = "RSTV"
  @ViewChild('rstvForm')
  rstvForm : NgForm;
  constructor() { }

  ngOnInit() {
  }

  processRSTV(myform:NgForm){
    console.log('myform:', myform.value)
    console.log('Processing RSTV: ', this.rstvForm.value);
    for(let k in this.rstvForm.value){
      console.log('k=',k,'v=',this.rstvForm.value[k]);
    }
  }
}
