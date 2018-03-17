import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    console.log(this.storage.get('userData'))
  }

  redirectToLogin(){
    this.navCtrl.push(LoginPage);
  }

  redirectToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
