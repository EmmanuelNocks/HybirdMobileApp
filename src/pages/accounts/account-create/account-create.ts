import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { MmiServiceProvider } from '../../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../../providers/mmi-notify/mmi-notify';

/**
 * Generated class for the AccountCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account-create',
  templateUrl: 'account-create.html',
})
export class AccountCreatePage {

  accountNum:any;
  clientData:any={accounts:[],age:0,name:''};// giving default values if it happens that json structure changes from api
  accountData:any={balance: 0,overdraft: 0};
  fullEndpoint:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider,public alertCtrl: AlertController) {


    
  }

  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.accountNum = Math.floor(1000000 + Math.random() * 900000);
    this.fullEndpoint = this.mmi_request.clientDomainUrl+'clients/'+window.sessionStorage.getItem('localId')+'.json?auth='+window.sessionStorage.getItem('idToken');
    this.getClientData();
  }


  private isvalidateAccount():boolean{

    if(this.accountNum>0){
      
            
            return true;
      }
      else{
  
            this.notify.presentAlert('Accounts ','Cannot be negative number or empty');
            return false;
      }

  }

  private pushAccountTolist():void{

    this.clientData.accounts.push(parseFloat(this.accountNum));
  }

  private getClientDataASBody():any{

    return this.clientData;
  }

 private sendRequest(body):void{

    this.mmi_request.apiPut(body,this.fullEndpoint).subscribe((data) => {
    
        this.accountNum = null;
        this.notify.presentAlert('Account','Successful Saved!');

    },
    (error)=>{

        this.notify.presentAlert('Accounts Error','Could not save');

    });

 }

  public saveNewAcc(){

    if(this.isvalidateAccount()){
      this.pushAccountTolist();
      this.sendRequest(this.getClientDataASBody());
    }
    
 
  }

  public getClientData(){


          this.mmi_request.apiGet(this.fullEndpoint).subscribe((data) => {
                  
                this.clientData = data;

          },
          (error)=>{

         
              this.notify.presentAlert('Accounts Error','Could not fetch accounts');     

          });

  }

}
