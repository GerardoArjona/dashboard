import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TicketsInfoComponent } from './tickets-info/tickets-info.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { SearchListTicketsPipe } from './search-list-tickets.pipe';
import { UserCardInfoComponent } from './user-card-info/user-card-info.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { ResponsiveNavbarComponent } from './responsive-navbar/responsive-navbar.component';

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
    TicketsListComponent,
    SearchListTicketsPipe,
    UserCardInfoComponent,
    UserAccountComponent,
    UserPurchasesComponent,
    ResponsiveNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
