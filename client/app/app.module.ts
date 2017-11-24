import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { StaticScanService } from './services/static-scan.service';

import { AppComponent } from './app.component';
import { StaticScanDashboardComponent } from './components/static-scan-dashboard/static-scan-dashboard.component';
import { AppSecurityDashboardComponent } from './components/app-security-dashboard/app-security-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    StaticScanDashboardComponent,
    AppSecurityDashboardComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    StaticScanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
