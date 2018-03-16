import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedPage } from '../saved/saved';
import { API_BASE_URL } from '../../config';
import axios from 'axios';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-new-joke',
  templateUrl: 'new-joke.html',
})
export class NewJokePage {

  newJoke = '';
  newPunchLine = '';
  token = '';
  userId = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewJokePage');
    this.storage.get('userData').then((val) => {
      this.token = val.token;
      this.userId = val.userId;
      console.log(this.token)
      console.log(this.userId)
    })
  }

  addNewJoke(){
    console.log(this.newJoke)
    console.log(this.newPunchLine)
    let newJoke = {
      joke: this.newJoke,
      punchLine: this.newPunchLine,
      userId: this.userId,
      token: this.token
    };
    axios.post(`${API_BASE_URL}joke/newJoke`, newJoke).then((response) => {
      console.log(response)
      this.navCtrl.push(SavedPage);
    }).catch((err) => {
      console.log(err)
    });
  }
}
