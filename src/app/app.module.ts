import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from '../pages/login/login';
import { MmiServiceProvider } from '../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../providers/mmi-notify/mmi-notify';
import { AccountsPage } from '../pages/accounts/accounts/accounts';
import { AccountReadPage } from '../pages/accounts/account-read/account-read';
import { AccountCreatePage } from '../pages/accounts/account-create/account-create';
import { WithdrawPage } from '../pages/transactions/withdraw/withdraw';
import { DepositPage } from '../pages/transactions/deposit/deposit';
import { DetailedTabPage } from '../pages/tabs/detailed-tab/detailed-tab';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    AccountsPage,
    AccountReadPage,
    AccountCreatePage,
    DepositPage,
    WithdrawPage,
    DetailedTabPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    AccountsPage,
    AccountReadPage,
    AccountCreatePage,
    DepositPage,
    WithdrawPage,
    DetailedTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MmiServiceProvider,
    MmiNotifyProvider
  ]
})
export class AppModule {}
