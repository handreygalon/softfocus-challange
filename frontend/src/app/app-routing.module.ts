import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationDetailComponent } from './communication-detail/communication-detail.component';
import { NewCommunicationComponent } from './new-communication/new-communication.component';

const routes: Routes = [
  { path: 'communication-detail/:id', component: CommunicationDetailComponent },
  { path: 'new-communication', component: NewCommunicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CommunicationDetailComponent, NewCommunicationComponent]
