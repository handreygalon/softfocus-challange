import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { CultivationComponent } from './cultivation/cultivation.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'cultivation', component: CultivationComponent },
  { path: 'event', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [CommunicationDetailComponent, NewCommunicationComponent]
