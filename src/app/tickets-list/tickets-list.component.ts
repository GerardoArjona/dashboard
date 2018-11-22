import { Component, OnInit } from '@angular/core';
import { TicketsListService } from './tickets-list.service';
import { Table } from './Table';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
   
  }
  
}

