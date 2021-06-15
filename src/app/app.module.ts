import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//novos pacotes
import { AppVersion } from '@ionic-native/app-version/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Market } from '@ionic-native/market/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy
  },
    AppVersion,
    Market
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
