import { Component, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //save data
  shoppingList : string[] = [];
 
  @Output()
  returnItem = new EventEmitter<string>();

  //only add exist, not add if not exist
  newItem(item: string){
    
    //console.log('>>> in')
    for(let i in this.shoppingList){
      //console.log('>>> in: ',this.shoppingList[i])

      //duplicate detect
      if(item == this.shoppingList[i])
      return;
    }
    //console.log('>>> of')
    for(let i of this.shoppingList){
     // console.log('>>> of: ',this.shoppingList[i])
    }

    console.log(">>>>new items: ", item);
    this.shoppingList.push(item);
  }

  deleteItem(item:string){
    console.log("deleting items: ", item);
    this.returnItem.next(item);
  }
}
