import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MmiServiceProvider } from '../../providers/mmi-service/mmi-service';
import { MmiNotifyProvider } from '../../providers/mmi-notify/mmi-notify';
import { TabsPage } from '../tabs/tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mmi_request:MmiServiceProvider,public notify: MmiNotifyProvider) {

    this.data = {
      email:"",
      password:"",
      returnSecureToken: true
    }
    
  }


  private handleAuthenticationError(error): void {
    this.notify.dismissLoading();
    let msg = error.status != 0 ? JSON.parse(error._body).error.message : 'Connection problem';
    this.notify.presentToast(msg)

  }

  private setUserSession(token, localId): void {
   
      window.sessionStorage.setItem('idToken', token);
      window.sessionStorage.setItem('localId', localId);
  
  }

  private getResponse(response):void{

      if(response){
                                
        this.setUserSession(response.idToken,response.localId);
        this.notify.dismissLoading();
        this.navCtrl.setRoot(TabsPage);

      }
      else{

        this.notify.dismissLoading();                 
        this.notify.presentToast("Error while trying to login");
      }
  }

  private sendRequest(body):void{

    this.notify.presentLoading('Authenticating...');

    this.mmi_request.apiPost(body,this.mmi_request.authUrl).subscribe((response) => {
      
      this.getResponse(response)
    },
      (error)=>{

        this.handleAuthenticationError(error);
        
      });


  }

  private validateInputUser():void{

        try {

              if(this.data.email && this.data.password){

                this.sendRequest(this.data);

              }
              else{

                this.notify.presentToast("All fields are required");
              }
      }   
      catch (error) {

        
      }
  }

  public login():void{

      this.validateInputUser();
  }
}

