import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Router } from '@angular/router';
import * as io from 'socket.io-client'
import { ChatappService } from 'src/app/service/chatapp.service';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
public a:any;
public user:any=[];
public receiverid:any;
  constructor(private http:HttpClient,private route:Router,private chat:ChatappService)
   {
this.a=[{
  "sender_img":"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
  "receiver_img":"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",
  "sender_msg":"Hi Maryam i am good tnx how about you?",
  "receiver_msg":"Hi, how are you samim?",
  "sender_time":"8:55 AM, Today",
  "reciever_time":"8:40 AM, Today"

}]


this.chat.Socket.on('alluser',(data:any)=>{        
  console.log(data," res from api service")
  data.map((key) => {
    if (key._id!=localStorage.getItem('userid')) {
      this.user.push(key);
    }
  });

}) 
var data={
  "senderid":localStorage.getItem('userid'),
  "receiverid":"5d96f667af6fa124859a6e32"
}
this.chat.Socket.emit('userchatmsg',data)
this.chat.Socket.on('allmsg',(data:any)=>{        
  console.log(data," res from api service")
})
   }

  ngOnInit() {
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
        });
  }

sendmsg()
{
  console.log('send')
  var data={
"senderid":localStorage.getItem('userid'),
"receiverid":"5d96f667af6fa124859a6e32",
"message":"good morning"
  }
  this.chat.Socket.emit('chatentry',data)
}

receiverdetails(data)
{
  console.log(data);
  this.receiverid=data._id;
}
}
