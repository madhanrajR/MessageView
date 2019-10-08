import { Component, OnInit } from '@angular/core';
import { ChatappService } from 'src/app/service/chatapp.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private app:ChatappService) 
  {
    
   }

  ngOnInit() {
  }

}
