import { dashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './../lead/lead.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    LeadComponent,
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
