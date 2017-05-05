import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent, loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: '', redirectTo: '/signin', pathMatch: 'full'}

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const routing = RouterModule.forRoot(routes);