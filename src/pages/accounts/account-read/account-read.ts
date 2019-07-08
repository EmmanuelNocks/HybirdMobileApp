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
  fullEndpoint:string;
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
   

  }


  // using this since the constructor of tabs get called once
  ionViewWillEnter(){

    this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
    this.fullEndpoint = this.mmi_request.clientDomainUrl+'accounts/'+this.accountNum+'.json?auth='+window.sessionStorage.getItem('idToken');
    this.getAccountDetail();
  }

  private getResponse(response):void{

      if(response){

        this.accountDetail = response;
    }
    else{
        
    
        this.notify.presentAlert('Accounts Error','Could not get the details');
    }
  }

  private sendRequest():void{

      this.mmi_request.apiGet(this.fullEndpoint).subscribe((response) => {

          this.getResponse(response);

      },
      (error)=>{

          this.notify.presentAlert('Accounts Error','Could not get the details');        

      });

  }
  public getAccountDetail(){

  
      try {

        this.sendRequest();
        
      } 
      catch (error) {
        
        this.notify.presentAlert('Accounts Error',error);   
              
      }


   
  }


public GotoMain(){

 
  this.app.getRootNav().push(TabsPage)
}
}
