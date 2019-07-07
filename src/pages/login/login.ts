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


  login(){

      try {

              if(this.data.email && this.data.password){

                  this.notify.loaderCtr("Authenticating...");
                  this.notify.loader.present();

                  this.mmi_request.apiPost(this.data,this.mmi_request.authUrl).subscribe((response) => {
                     
                          
                            if(response){
                              
                                  window.sessionStorage.setItem('idToken',response.idToken);
                                  window.sessionStorage.setItem('localId',response.localId);

                                  this.notify.loader.dismiss();
                                  this.navCtrl.setRoot(TabsPage);
                          
                            }
                            else{

                                  this.notify.loader.dismiss();
                                  this.notify.toastCtr("Error while trying to login");
                                  this.notify.toast.present();
                            }
                          
                        
                    },
                    (error)=>{

                              this.notify.loader.dismiss();
                              let msg = error.status !=0? JSON.parse(error._body).error.message:'Connection problem';
                              this.notify.toastCtr(msg);
                              this.notify.toast.present();
                      
                    });

                }
                else{

                  this.notify.toastCtr("All fields are required");
                  this.notify.toast.present();
                }
          }   
          catch (error) {
  
            
          }
  }
}
