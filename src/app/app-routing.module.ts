import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { GuidesCreateComponent } from './guides-create/guides-create.component';
import { GuidesReadComponent } from './guides-read/guides-read.component';

const routes: Routes = [

  { path: 'user', component: UserInfoComponent },
  { path: 'tickets', component: UserTicketsComponent },
  { path: 'guides-create',component: GuidesCreateComponent },
  { path: 'guides-read', component: GuidesReadComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ UserInfoComponent, UserTicketsComponent, GuidesCreateComponent, GuidesReadComponent] 
