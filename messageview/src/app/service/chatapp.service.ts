import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatappService {
  isLoggedIn:boolean = false;

  constructor() { }
}
