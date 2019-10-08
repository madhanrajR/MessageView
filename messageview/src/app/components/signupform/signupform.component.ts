import { Component, OnInit } from '@angular/core';
import { ChatappService } from 'src/app/service/chatapp.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  constructor(private ChatappService:ChatappService) { }

  ngOnInit() {
   
  }
  signupdetails(a,b,c)
  {
  console.log(a,b,c);
  var data={
"email":a,
"username":b,
"password":c
  }
this.ChatappService.signup(data);
  }
}
