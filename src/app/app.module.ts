import { ErrorService } from './errors/error.service';
import { AuthenticationService } from './authentication/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// ng-idle dependencies
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ErrorComponent } from './errors/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    RegisterComponent,
    SigninComponent,
    AuthenticationComponent,
    LogoutComponent,
    DashboardComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,

    // ng-idle thingy
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [AuthenticationService, ErrorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
