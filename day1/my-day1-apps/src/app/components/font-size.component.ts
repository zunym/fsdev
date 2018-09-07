import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
@Input() message : string;
@Output() onFontSize = new EventEmitter<number>();
fontSize: string = "40px";

fontSizeChanged($event){
  const fontSize = parseInt($event.target.value);
  this.fontSize = `${fontSize}px`;
  this.onFontSize.next(fontSize);
} 

  constructor() { }

  ngOnInit() {
  }

}
