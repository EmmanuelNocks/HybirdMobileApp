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
  constructor(public navCtrl: NavController, public navParams: NavParams,public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider,public alertCtrl: AlertController) {


    
  }

  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.accountNum = Math.floor(1000000 + Math.random() * 900000);
    this.getClientData();
  }



  public saveNewAcc(){

    if(this.accountNum>0){
      
    this.clientData.accounts.push(parseFloat(this.accountNum));
    let tempurl = this.mmi_request.clientDomainUrl+'clients/'+window.sessionStorage.getItem('localId')+'.json?auth='+window.sessionStorage.getItem('idToken');

    this.mmi_request.apiPut(this.clientData,tempurl).subscribe((data) => {
   
            this.accountNum = null;
            this.notify.alertCtr('Account','Successful Saved!');
            this.notify.alert.present();
      },
      (error)=>{
        
            this.notify.alertCtr('Accounts Error','Could not save');
            this.notify.alert.present();  

        
      });

    }
    else{

          this.notify.alertCtr('Accounts ','Cannot be negative number or empty');
          this.notify.alert.present();  
    }
  }

  public getClientData(){

          let tempurl = this.mmi_request.clientDomainUrl+'clients/'+window.sessionStorage.getItem('localId')+'.json?auth='+window.sessionStorage.getItem('idToken');

          this.mmi_request.apiGet(tempurl).subscribe((data) => {
                  
                this.clientData = data;

          },
          (error)=>{

              this.notify.alertCtr('Accounts Error','Could not fetch accounts');
              this.notify.alert.present();            

          });

  }

}
