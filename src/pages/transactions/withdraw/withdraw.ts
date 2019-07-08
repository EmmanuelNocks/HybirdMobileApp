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
  fullEndpoint:string;
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams,public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
  }

 // using this since the constructor of tabs get called once
 ionViewWillEnter(){

  this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
  this.fullEndpoint = this.mmi_request.clientDomainUrl+'accounts/'+this.accountNum+'.json?auth='+window.sessionStorage.getItem('idToken');
  this.getAccounts(this.accountNum);
}

  public getAccounts(account){

      this.sendGetRequest();

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
      this.notify.presentAlert('Withdraw','Successful Withdrawn!'); 

    },
    (error)=>{

      this.notify.presentAlert('Withdraw Error','an error has occurred '); 
                  
    });

  }

  private calculateBalanceAndSetTotalAmount():void{

    let total = Number(this.accountData.balance)-Number(this.amount);
    this.accountData.balance = total;
   
  }

private calculateOverdraftAndSetTotalAmount():void{

  let total = Number(this.accountData.overdraft)-Number(this.amount);
  this.accountData.overdraft = total;
}

private isAmountValid():boolean{

  if(this.amount>0){

    
    return true;
  }
  else{

    this.notify.presentAlert('Withdraw','Cannot withdraw  '+ 'R'+this.accountData.balance);
    return false;
  }

}

private  areYouEntitledToWithdrawOverdraft():boolean{

  if((Number(this.accountData.overdraft)-Number(this.amount)) >=0){

    return true;
  }
  else{

    this.notify.presentAlert('Withdraw Overdraft','You are entitled to withdraw '+ 'R'+this.accountData.balance); 

    return false;
    
  }
}


private  areYouEntitledToWithdrawBalance():boolean{

  if((Number(this.accountData.balance)-Number(this.amount)) >=0){

    return true;
  }
  else{

    this.notify.presentAlert('Withdraw Balance','You are entitled to withdraw '+ 'R'+this.accountData.balance); 
    
    return false;
  }
}
public withdraw(body){

    this.sendPutRequest(body);

  }

  public getCash(isoverdraft){

    if(this.isAmountValid()){


      if(isoverdraft && this.areYouEntitledToWithdrawOverdraft()){

       

          this.calculateOverdraftAndSetTotalAmount();
          this.withdraw(this.accountData);


      }
      else if(this.areYouEntitledToWithdrawBalance()){


          
          this.calculateBalanceAndSetTotalAmount();
          this.withdraw(this.accountData);
      
      }

    }
 

  }

  public GotoMain(){

 
    this.app.getRootNav().push(TabsPage)
  }
}
