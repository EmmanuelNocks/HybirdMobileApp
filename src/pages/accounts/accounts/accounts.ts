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

  data:any={accounts:[],age:0,name:''};
  constructor( private app:App ,public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {
 
  }

  // using this since the constructor of tabs get called once
  ionViewWillEnter(){
    this.getAccounts();
  }

  public getAccounts(){

          let tempurl = this.mmi_request.clientDomainUrl+'clients/'+window.sessionStorage.getItem('localId')+'.json?auth='+window.sessionStorage.getItem('idToken');
          this.mmi_request.apiGet(tempurl).subscribe((data) => {
                  
              this.data = data;
              console.log(data)

          },
          (error)=>{

            
              this.notify.alertCtr('Accounts Error','Could not save');
              this.notify.alert.present();            

          });


  }

public accountSelected(acc){

 
  window.sessionStorage.setItem('currectAccount',acc);
  //this.navCtrl.push(DetailedTabPage);
  this.app.getRootNav().setRoot(DetailedTabPage)
}
}
