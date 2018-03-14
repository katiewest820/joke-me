import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import axios from 'axios';
import { API_BASE_URL }  from '../../config';


@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

  mySavedJokes = this.navParams.get('savedJokes');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    axios.get(`${API_BASE_URL}joke/getAllJokes`).then((jokes) => {
      this.mySavedJokes = jokes.data.data
      console.log(this.mySavedJokes)
    })
      .catch((err) => {
        console.log(err)
      });
  }

  deleteJoke(id){
    console.log(id)
    axios.delete(`${API_BASE_URL}joke/deleteJoke/${id}`).then((response) => {
      console.log(response)
    }).then(() => {
      this.ionViewWillEnter()
    })
    .catch((err) => {
      console.log(err)
    });
  }
}

