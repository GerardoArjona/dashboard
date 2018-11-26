import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  user = {
    name: "Gerardo"
  }

  messages = [
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "sent text-right pull-right"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },
    {
      text: "Hola", 
      date: "12-03-24",
      time: "12:00:00",
      who: "received text-left pull-left"
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
