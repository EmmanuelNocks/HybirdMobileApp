import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController ,ToastController,AlertController} from 'ionic-angular';

/*
Note : i am taking advantange of a provider to have  alerts and toasts and loaders into one file
  
Generated class for the MmiNotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MmiNotifyProvider {
  loader:any;
  toast:any;
  alert:any;
  constructor(public loaderCtrl: LoadingController, public ToastCtrl:ToastController,public alertCtrl:AlertController) {



  }

  public loaderCtr(msg){

    this.loader = this.loaderCtrl.create({content: msg});
  }

  public toastCtr(msg){

    this.toast = this.ToastCtrl.create({message:msg, duration: 3000, position: "middle"});
  }

  public alertCtr(title,msg){

    this.alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [{
          text: 'OK'
        }]
    });
  }
}
