import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ErrorComponent } from './Components/error/error.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProjectComponent } from './Components/project/project.component';
import { UsersComponent } from './Components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWeatherService } from './core/services/service-weather.service';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent,
    ProjectComponent,
    UsersComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [ServiceWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
