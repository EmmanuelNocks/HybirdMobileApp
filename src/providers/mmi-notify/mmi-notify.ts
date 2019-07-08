
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

  private loader:any;
  private toast:any;
  private alert:any;

  constructor(public loaderCtrl: LoadingController, public ToastCtrl:ToastController,public alertCtrl:AlertController) {



  }

  private loaderCtr(msg): void{

    this.loader = this.loaderCtrl.create({content: msg});
  }

  private toastCtr(msg): void{

    this.toast = this.ToastCtrl.create({message:msg, duration: 3000, position: "middle"});
  }

  private alertCtr(title,msg): void{

    this.alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [{
          text: 'OK'
        }]
    });

  }


  public presentLoading(msg): void {

    this.loaderCtr(msg);
    this.loader.present();

  }
  
  public dismissLoading(): void {

    this.loader.dismiss();
  }


  public presentToast(msg): void{

    this.toastCtr(msg);
    this.toast.present();
  }

  public presentAlert(title,msg): void{

    this.alertCtr(title,msg);
    this.alert.present(); 
  }
}
