import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from './../providers/auth-service';

import { APP_CONFIG, AppConfig } from './app.config';
import { PickItService } from './../providers/pickit/pickit';
import { HttpService } from '../providers/http-service/http-service';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';


export function httpInterceptor(backend: XHRBackend, options: RequestOptions,alert:AlertController, loading:LoadingController) {
        return new HttpService(backend, options,alert,loading);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PickItService,
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: Http,
      useFactory: (httpInterceptor),
      deps: [XHRBackend, RequestOptions,AlertController, LoadingController]
    }
  ]
})
export class AppModule {}
