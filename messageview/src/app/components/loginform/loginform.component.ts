import { Component, OnInit } from '@angular/core';
import { ChatappService } from 'src/app/service/chatapp.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private appserve:ChatappService){

  }

  ngOnInit() {
  }

}
