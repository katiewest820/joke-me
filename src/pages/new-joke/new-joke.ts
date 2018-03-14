import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SavedPage } from '../saved/saved';
import { API_BASE_URL } from '../../config';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-new-joke',
  templateUrl: 'new-joke.html',
})
export class NewJokePage {

  newJoke = '';
  newPunchLine = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewJokePage');

  }

  addNewJoke(){
    console.log(this.newJoke)
    console.log(this.newPunchLine)
    let newJoke = {
      joke: this.newJoke,
      punchLine: this.newPunchLine
    };
    axios.post(`${API_BASE_URL}joke/newJoke`, newJoke).then((response) => {
      console.log(response)
      this.navCtrl.push(SavedPage);
    }).catch((err) => {
      console.log(err)
    });
  }
}
