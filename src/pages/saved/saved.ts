import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import axios from 'axios';
import { API_BASE_URL }  from '../../config';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

  mySavedJokes = this.navParams.get('savedJokes');
  token = '';
  userId = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewWillEnter() {

    this.storage.get('userData').then((val) => {
      this.token = val.token;
      this.userId = val.userId;
      console.log(this.token)
      console.log(this.userId)
    }).then(() => {
      this.callApiForJokes()
    })

  }

  callApiForJokes(){
    axios.get(`${API_BASE_URL}joke/getAllJokes/${this.userId}`, {headers: {'authorization': this.token}})
    .then((jokes) => {
      console.log(jokes)
      this.mySavedJokes = jokes.data.data
      console.log(this.mySavedJokes)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  deleteJoke(id){
    console.log(id)
    axios.delete(`${API_BASE_URL}joke/deleteJoke/${id}`, {headers: {'authorization': this.token}}).then((response) => {
      console.log(response)
    }).then(() => {
      this.ionViewWillEnter()
    })
    .catch((err) => {
      console.log(err)
    });
  }
}

