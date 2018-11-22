import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TicketsListService } from './tickets-list/tickets-list.service';
import 'hammerjs';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AgGridModule } from 'ag-grid-angular';

import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TicketsInfoComponent } from './tickets-info/tickets-info.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserInfoComponent,
    UserChatComponent,
    UserDetailComponent,
    routingComponents,
    ContentComponent,
    UserCardComponent,
    TicketsInfoComponent,
    TicketsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Ng2SmartTableModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [TicketsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
