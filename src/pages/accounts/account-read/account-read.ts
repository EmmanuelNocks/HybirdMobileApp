import { Component } from '@angular/core';
import { NavController, NavParams ,App} from 'ionic-angular';
import { MmiServiceProvider } from '../../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../../providers/mmi-notify/mmi-notify';
import { TabsPage } from '../../tabs/tabs/tabs';
/**
 * Generated class for the AccountReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account-read',
  templateUrl: 'account-read.html',
})
export class AccountReadPage {

  accountNum:number;
  accountData:any={balance: 0,overdraft: 0};

  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
    this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));

    this.getAccounts(this.accountNum);
  }


  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
    this.getAccounts(this.accountNum);
  }

  public getAccounts(account){

  
          let tempurl = this.mmi_request.clientDomainUrl+'accounts/'+account+'.json?auth='+window.sessionStorage.getItem('idToken');
          this.mmi_request.apiGet(tempurl).subscribe((data) => {

               this.accountData = data;

          },
          (error)=>{

              this.notify.alertCtr('Accounts Error','Could not save');
              this.notify.alert.present();              

          });

   
  }


public GotoMain(){

 
  this.app.getRootNav().push(TabsPage)
}
}