//import { DashboardComponent } from './dashboard.component';
import { LeadComponent } from './../lead/lead.component';
import { Routes, RouterModule } from '@angular/router';
export const DASHBOARD_APP_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'lead', component: LeadComponent},
    // Keep the below one at the last
    //{ path: '', component: DashboardComponent},
];

export const dashboardRouting = RouterModule.forChild(DASHBOARD_APP_ROUTES);
