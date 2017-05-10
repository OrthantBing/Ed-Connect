
import { DashboardComponent } from './dashboard.component';
import { LeadlistComponent } from './../leadlist/leadlist.component';
import { LeadprofileComponent } from './../leadprofile/leadprofile.component';
//import { DashboardComponent } from './dashboard.component';
// import { LeadComponent } from './../lead/lead.component';
import { Routes, RouterModule } from '@angular/router';
export const DASHBOARD_APP_ROUTES: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'lead', component: LeadprofileComponent },
    { path: 'lead/:id', component: LeadprofileComponent },
    { path: 'leadlist', component: LeadlistComponent },

    //{ path: 'lead', component: LeadComponent},
    // Keep the below one at the last
    //{ path: '', component: DashboardComponent},
];

export const dashboardRouting = RouterModule.forChild(DASHBOARD_APP_ROUTES);
