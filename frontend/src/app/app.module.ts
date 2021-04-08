import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './communication/communication.component';
import { ShowCommComponent } from './communication/show-comm/show-comm.component';
import { AddEditCommComponent } from './communication/add-edit-comm/add-edit-comm.component';
import { CultivationComponent } from './cultivation/cultivation.component';
import { ShowCultivationComponent } from './cultivation/show-cultivation/show-cultivation.component';
import { AddEditCultivationComponent } from './cultivation/add-edit-cultivation/add-edit-cultivation.component';
import { EventComponent } from './event/event.component';
import { ShowEventComponent } from './event/show-event/show-event.component';
import { AddEditEventComponent } from './event/add-edit-event/add-edit-event.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    ShowCommComponent,
    AddEditCommComponent,
    CultivationComponent,
    ShowCultivationComponent,
    AddEditCultivationComponent,
    EventComponent,
    ShowEventComponent,
    AddEditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
