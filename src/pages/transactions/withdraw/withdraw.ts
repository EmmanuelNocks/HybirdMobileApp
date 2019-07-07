import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs/tabs';
import { MmiServiceProvider } from '../../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../../providers/mmi-notify/mmi-notify';
/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  amount:number;
  accountNum:number;
  accountData:any={balance: 0,overdraft: 0};
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams,public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
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

            this.notify.alertCtr('Accounts Error','Could not fetch accounts');
            this.notify.alert.present();  
          });


  }



  public withdraw(body){



    let tempurl = this.mmi_request.clientDomainUrl+'accounts/'+this.accountNum+'.json?auth='+window.sessionStorage.getItem('idToken');
    this.mmi_request.apiPut(body,tempurl).subscribe((data) => {
      
      this.amount = null;
      this.notify.alertCtr('Withdraw','Successful Withdrawn!');
      this.notify.alert.present();

    },
    (error)=>{

      console.log(error);
      this.notify.alertCtr('Withdraw Error','an error has occurred ');
      this.notify.alert.present();             

    });


  }

  public validate(isoverdraft){

    if(this.amount>0){


      if(isoverdraft){

        if((Number(this.accountData.overdraft)-Number(this.amount)) >=0){
          let total = Number(this.accountData.overdraft)-Number(this.amount);
          this.accountData.overdraft = total;
        
          this.withdraw(this.accountData);
        }
        else{

          this.notify.alertCtr('Withdraw Overdraft','You are entitled to withdraw '+ 'R'+this.accountData.balance);
          this.notify.alert.present();
          
        }

      }
      else{

        if((Number(this.accountData.balance)-Number(this.amount)) >=0){
          let total = Number(this.accountData.balance)-Number(this.amount);
          this.accountData.balance = total;
         
          this.withdraw(this.accountData);
        }
        else{

          this.notify.alertCtr('Withdraw Balance','You are entitled to withdraw '+ 'R'+this.accountData.balance);
          this.notify.alert.present();
          

        }
      }

    }
    else{

      this.notify.alertCtr('Withdraw','Cannot withdraw  '+ 'R'+this.accountData.balance);
      this.notify.alert.present();
    }

  }

  public GotoMain(){

 
    this.app.getRootNav().push(TabsPage)
  }
}
