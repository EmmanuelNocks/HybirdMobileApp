import { Component } from '@angular/core';
import { NavController, NavParams ,App} from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs/tabs';
import { MmiServiceProvider } from '../../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../../providers/mmi-notify/mmi-notify';
/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  amount:number;
  accountNum:number;
  accountData:any={balance: 0,overdraft: 0};
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {

  }

 // using this since the constructor of tabs get called once
 ionViewWillEnter(){
  this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
  this.getAccounts(this.accountNum);
}

  public getAccounts(account){

    try {
          let tempurl = this.mmi_request.clientDomainUrl+'accounts/'+account+'.json?auth='+window.sessionStorage.getItem('idToken');
          this.mmi_request.apiGet(tempurl).subscribe((data) => {

               this.accountData = data;

          },
          (error)=>{

          console.log(error);              

          });

    } catch (error) {
      
    }
  }

  public GotoMain(){

 
    this.app.getRootNav().push(TabsPage)
  }

  public deposit(){

    if(this.amount>0){

      let total = Number(this.amount)+Number(this.accountData.balance);
    
      this.accountData.balance = total;

        let tempurl = this.mmi_request.clientDomainUrl+'accounts/'+this.accountNum+'.json?auth='+window.sessionStorage.getItem('idToken');
        this.mmi_request.apiPut(this.accountData,tempurl).subscribe((data) => {
          
          this.amount = null;
          this.notify.alertCtr('Deposit','Successful Saved!');
          this.notify.alert.present();

        },
        (error)=>{

          this.notify.alertCtr('Deposit','Error occured!');
          this.notify.alert.present();
        });


    }
    else{

    }

  }
}
