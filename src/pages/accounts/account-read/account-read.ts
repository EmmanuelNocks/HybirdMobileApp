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
  accountDetail:any={balance: 0,overdraft: 0};

  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
   

  }


  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
    this.getAccountDetail(this.accountNum);
  }

  public getAccountDetail(account){

  
      try {

                let tempurl = this.mmi_request.clientDomainUrl+'accounts/'+account+'.json?auth='+window.sessionStorage.getItem('idToken');
                this.mmi_request.apiGet(tempurl).subscribe((response) => {

                    if(response){

                        this.accountDetail = response;
                    }
                    else{
                        
                        this.notify.alertCtr('Accounts Error','Could not get the details');
                        this.notify.alert.present(); 
                    }

                },
                (error)=>{

                    this.notify.alertCtr('Accounts Error','Could not get the details');
                    this.notify.alert.present();              

                });
        
      } 
      catch (error) {
        
              this.notify.alertCtr('Accounts Error',error);
              this.notify.alert.present(); 
      }


   
  }


public GotoMain(){

 
  this.app.getRootNav().push(TabsPage)
}
}
