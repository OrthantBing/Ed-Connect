import { LeadlistComponent } from './../leadlist/leadlist.component';
import { AsyncemailValidator } from './../shared/asyncemail.validator';
import { LeadService } from './../lead/lead.service';
import { DateValidator } from './../shared/date.directive';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { dashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './../lead/lead.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatepickertestComponent } from './../datepickertest/datepickertest.component';
import { LeadprofileComponent } from './../leadprofile/leadprofile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting,
    ImageUploadModule,
    DatepickerModule,
    NgxDatatableModule
  ],
  declarations: [
    LeadComponent,
    DatepickerComponent,
    DatepickertestComponent,
    DateValidator,
    AsyncemailValidator,
    LeadprofileComponent,
    LeadlistComponent,

  ],
  providers: [ LeadService ],
  bootstrap: []
})
export class DashboardModule { }
