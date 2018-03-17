import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import axios from 'axios'
import { API_BASE_URL } from '../../config';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    console.log(this.username)
    console.log(this.password)
    let registerData = {
      userName: this.username,
      password: this.password
    }
    axios.post(`${API_BASE_URL}auth/register`, registerData).then((response) => {
      console.log(response)
      if(response.status !== 200){
        return
        //TODO error handling
      }
      this.logUserIn(registerData)
      }).catch((err)=> {
        console.log(err)
    });
  }

  logUserIn(registerData){
    axios.post(`${API_BASE_URL}auth/login`, registerData).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
}
