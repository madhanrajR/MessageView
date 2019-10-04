import { Component } from '@angular/core';
import { ChatappService  } from "../app/service/chatapp.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messageview';
  constructor(private appserve:ChatappService){

  }
}
