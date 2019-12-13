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
public msg:any=[];
public a:any=[];
public receivermsg:any=[];
public user:any=[];
public receiverid:any;
public senderid:any;
public receivername:any;
public receiverstatus:boolean=false;
public msgstatus:boolean=false;
public conversationid:any;
Object = Object;
  constructor(private http:HttpClient,private route:Router,private chat:ChatappService)
   {
    this.senderid=localStorage.getItem('userid');
    this.http.get(this.chat.baseurl+'listusers').subscribe(res =>{
      console.log(res)
               this.user=res; 
    })
// this.chat.Socket.on('alluser',(data:any)=>{        
//   console.log(data," res from api service")
//   data.map((key) => {
//     if (key._id!=localStorage.getItem('userid')) {
//       this.user.push(key);
//     }
//   });

//}) 
// var data={
//   "senderid":localStorage.getItem('userid'),
//   "receiverid":"5d96f667af6fa124859a6e32"
// }
// this.chat.Socket.emit('userchatmsg',data)
// this.chat.Socket.on('allmsg',(data:any)=>{        
//   console.log(data," res from api service")
// })
   }

  ngOnInit() {
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
        });
  }

sendmsg(msg)
{
  console.log('send')
  var data={
"senderid":localStorage.getItem('userid'),
"receiverid":localStorage.getItem('receiverid'),
"message":msg
  }
 // this.chat.Socket.emit('chatentry',data)
 this.http.post(this.chat.baseurl+'chat',data).subscribe(res =>{
  console.log(res)
  this.conversationid=res['data'];
})
  this.rendermsg();
}

receiverdetails(data)
{
  console.log(data);
  this.receiverid=data._id;
  this.senderid=localStorage.getItem('userid');
  localStorage.setItem("receiverid",data._id);
  this.receivername=data.username;
  this.receiverstatus=true;
  let data1={
    "senderid":localStorage.getItem('userid'),
    "receiverid":localStorage.getItem('receiverid'),
  }
  this.http.post(this.chat.baseurl+'conversation',data1).subscribe(res =>{
    console.log(res)
    this.conversationid=res['id'];
    this.rendermsg();
  })
  // this.chat.Socket.emit('conversationentry',data1);
  // this.chat.Socket.on('conversation',(data:any)=>{ 
  //   console.log(data);
    
  // })
 

}
public receivermsgsts:boolean=false;
rendermsg()
{
  console.log("render",this.conversationid);
 
  let data1={
   "conversationid":this.conversationid
  }
  this.http.post(this.chat.baseurl+'conversationdet',data1).subscribe(res =>{
    console.log(res)
   this.msg = res;
   console.log(this.msg,"msg")
   this.msgstatus=true;
  })

}
}
