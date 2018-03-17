import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavedPage } from '../saved/saved';
import axios from 'axios';
import { API_BASE_URL }  from '../../config';
import { LandingPage } from '../landing/landing';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  joke = '';
  punchLine = '';
  punchLineVisible = false;
  iconName = 'arrow-dropdown-circle';
  //TODO post to DB
  savedJokes = [];
  constructor(
    public navCtrl: NavController,
    private app: App,
    private storage: Storage
    ) {

  }

  callToApiForJoke(){
    axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
    .then((response) => {
      console.log(response)
        this.punchLineVisible = false;
        this.joke = response.data.setup;
        this.punchLine = response.data.punchline;
      }).catch((err) => {
        console.log(err)
      })
  }

  togglePunchLine(){
    this.punchLineVisible = !this.punchLineVisible;
    if(this.iconName === 'arrow-dropup-circle'){
      this.iconName = 'arrow-dropdown-circle'
    } else {
      this.iconName = 'arrow-dropup-circle';
    }
  }

  saveJoke(punchLine, joke){
    let token;
    let userId;

    this.storage.get('userData').then((val) => {

      token = val.token;
      userId = val.userId;
    }).then(() => {
    let newJoke = {
      joke: joke,
      punchLine: punchLine,
      userId: userId,
      token: token
    };
    axios.post(`${API_BASE_URL}joke/newJoke`, newJoke)}).then((response) => {
      axios.get(`${API_BASE_URL}joke/getAllJokes/${userId}`, {headers: {'authorization': token}}).then((jokes) => {
        this.savedJokes = jokes.data.data;
        this.navCtrl.push(SavedPage, {
          savedJokes: this.savedJokes
        });
      });
    })
    .catch((err) => {
      console.log(err)
    });
  }

  logOut(){
    this.storage.clear().then(() => {
      this.app.getRootNav().setRoot(LandingPage);
    });
  }

}
