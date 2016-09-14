import 'rxjs/Rx'; // load all features of reactive extensions

import { Component, ViewChild } from '@angular/core';
import { Platform, ionicBootstrap, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';

import { OrderFormListComponent } from './orderForm/component/orderForm-list.component';
import { OrderFormService } from './orderForm/service/orderForm-service';
import { LoginComponent } from './shared/component/login.component';

import {Auth, User, CloudSettings, provideCloud} from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '27de0193'
  }
};

@Component({
  templateUrl: './build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
 rootPage: any = LoginComponent;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation 
    this.pages = [
      { title: 'Login', component: LoginComponent },
      { title: 'Order Forms', component: OrderFormListComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp ,[provideCloud(cloudSettings)]);