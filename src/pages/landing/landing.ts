import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  redirectToHome(){
    this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
  }

  redirectToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
