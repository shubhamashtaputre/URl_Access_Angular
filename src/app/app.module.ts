import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlaccessComponent } from './urlaccess/urlaccess.component';
import { UrlsettingComponent } from './urlsetting/urlsetting.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlaccessComponent,
    UrlsettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
