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
  fullEndpoint:string;
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {

  }

 // using this since the constructor of tabs get called once
 ionViewWillEnter(){
  this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
  this.fullEndpoint = this.mmi_request.clientDomainUrl+'accounts/'+this.accountNum+'.json?auth='+window.sessionStorage.getItem('idToken');
  this.getAccounts();
}

private setAccountData(data):void{
  this.accountData = data;
}

private sendGetRequest():void{

  this.mmi_request.apiGet(this.fullEndpoint).subscribe((data) => {

    this.setAccountData(data);
  },
  (error)=>{

    this.notify.presentAlert('Accounts Error','Could not get the accounts');             

  });

}

private sendPutRequest(body):void{

  this.mmi_request.apiPut(body,this.fullEndpoint).subscribe((data) => {
          
    this.amount = null;
    this.notify.presentAlert('Deposit','Successful Saved!');  
  },
  (error)=>{

    this.notify.presentAlert('Deposit','Error occured!'); 
  });
}

private isAmountValid():boolean{

  if(this.amount>0){

    
    return true;
  }
  else{

    this.notify.presentAlert('Deposit','Invalid Amount'); 
    return false;
  }

}

private calculateAndSetTotalAmount():void{

  let total = Number(this.amount)+Number(this.accountData.balance);
    
  this.accountData.balance = total;
}
public getAccounts(){

    try {

          this.sendGetRequest();

    } catch (error) {
      
      this.notify.presentAlert('Accounts Error',error);  
    }
  }

public GotoMain(){

 
    this.app.getRootNav().push(TabsPage)
  }

public deposit(){

    try {
      
      if(this.isAmountValid()){

        this.calculateAndSetTotalAmount();
        this.sendPutRequest(this.accountData);
  
  
      }
    } catch (error) {
      
        this.notify.presentAlert('Accounts Error',error);  
    }


  }
}
