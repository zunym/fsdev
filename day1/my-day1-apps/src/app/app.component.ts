import { Component } from '@angular/core';
import { FontSizeComponent } from './components/font-size.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  // greeting = "hello world";
  // fontSize = "1em";

  // fontSizeChanged($event){
  //   this.fontSize = `${$event.target.value}em`
  // } 
  sizeChanged(size){
    console.log(`font size: ${size}`);
  }
}
