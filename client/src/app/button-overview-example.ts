import { formatDate } from '@angular/common';
import {Component} from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
})
export class ButtonOverviewExample {
  msg:string;
  constructor() {

   }

   clickEvent(){
     var time = new Date();
     this.msg= time.toLocaleTimeString('en-US')
   
    return this.msg;
  }
}
