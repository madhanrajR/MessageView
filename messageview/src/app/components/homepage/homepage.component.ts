import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
public a:any;
  constructor()
   {
this.a=[{
  "sender_img":"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
  "receiver_img":"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
  "sender_msg":"Hi Maryam i am good tnx how about you?",
  "receiver_msg":"Hi, how are you samim?",
  "sender_time":"8:55 AM, Today",
  "reciever_time":"8:40 AM, Today"

}]
   }

  ngOnInit() {
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
        });
  }

}
