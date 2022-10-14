import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ShowDeleteTicketComponent } from './tickets/show-delete-ticket/show-delete-ticket.component';
import { AddEditTicketComponent } from './tickets/add-edit-ticket/add-edit-ticket.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SystemUserComponent } from './system-user/system-user.component';

//all components that we created has been declared.
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    ShowDeleteTicketComponent,
    AddEditTicketComponent,
    SystemUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
