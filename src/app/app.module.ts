import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components Import
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';

/* Http Imports */
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES'
   }],
  bootstrap: [HouseListComponent]
})
export class AppModule { }
