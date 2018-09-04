import { Component } from '@angular/core';
import {ToPrint} from './components/hello.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listofNames =["a", "b", "c", "d", "e"];
  listOfNames = [];
  toDisplay:string="Yin"
  //name is $event - from toPrint.next(this.displayName)
  pleasePrintThis(eventObject: ToPrint) {
    console.log('>>> from app-hello: ', eventObject);

  }
  nameSelected(name: string) {
    console.log('clicked: ', name);
    this.toDisplay = name;
  }
}

