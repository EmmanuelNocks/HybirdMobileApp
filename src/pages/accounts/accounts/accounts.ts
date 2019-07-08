import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { MmiServiceProvider } from '../../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../../providers/mmi-notify/mmi-notify';
import { DetailedTabPage } from '../../tabs/detailed-tab/detailed-tab';

/**
 * Generated class for the AccountsPage page.
 *https://momentum-retail-practical-test.firebaseio.com/clients/<localId_from_login_response>.json?auth=<idToken_from_login_response>
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  clientData:any={accounts:[],age:0,name:''};
  fullEndpoint:string;
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
 
  }

  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.fullEndpoint = this.mmi_request.clientDomainUrl+'clients/'+window.sessionStorage.getItem('localId')+'.json?auth='+window.sessionStorage.getItem('idToken');
    this.getClientData();
  }

private getResponse(response):void{

    if(response){

      this.clientData = response;
    }
    else{


      this.notify.presentAlert('Accounts Error','Could not get the accounts');   
    }
}
private sendRequest():void{

     
  this.mmi_request.apiGet(this.fullEndpoint).subscribe((response) => {
                  
    this.getResponse(response);

  },
  (error)=>{

    this.notify.presentAlert('Accounts Error','Could not get the accounts');           

  });

}
public getClientData(){

    try{
 
        this.sendRequest();
      }
    catch(error){

        this.notify.presentAlert('Accounts Error',error);   
    }


  }

public accountSelected(acc){

 
  window.sessionStorage.setItem('currectAccount',acc);
  this.app.getRootNav().setRoot(DetailedTabPage)
}
}
