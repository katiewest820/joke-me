import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName = '';
  password = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  redirectToHome(){
    let loginData = {
      userName: this.userName,
      password: this.password
    }
    axios.post(`${API_BASE_URL}auth/login`, loginData).then((response) => {
      if(response.status === 200){
        console.log(response)
        let userData = {
          token: response.data.token,
          userId: response.data.userId
        };
        this.storage.set('userData', userData);

        this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
