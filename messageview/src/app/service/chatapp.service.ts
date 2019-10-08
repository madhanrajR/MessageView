import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Router } from '@angular/router';
import * as io from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})
export class ChatappService {
  isLoggedIn:boolean = false;
  public baseurl:string="http://10.10.0.142:3000"
  public Socket= io(this.baseurl)
  constructor(private http:HttpClient,private route:Router) { }

  connstatus(){
    this.http.get(this.baseurl).subscribe(res =>{
      console.log(res)
    })
  }


  getmst(){   
    console.log("get mst fun")     
    this.Socket.on('alluser',(data:any)=>{        
      console.log(data," res from api service")
    })  
}



signup(data)
{
 
  this.Socket.emit('reg',data);

  this.Socket.on('regstatus',(data:any)=>{
    console.log(data);  
    if(data.status==="success")
    {
      this.route.navigate(['home']);
    }
  })
 
}

login(a,b)
{
  console.log(a,b);
  
  var data={
    "username":a,
    "password":b
  }
  this.Socket.emit('logindet',data);
  this.Socket.on('loginstatus',(data:any)=>{
    console.log(data);  
    if(data.user)
    {
      localStorage.setItem('userid',data.data[0]._id)
      this.route.navigate(['home']);
    }
  })
}

logout()
{
  this.route.navigate(['login']);
}
}
