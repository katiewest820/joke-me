import { Component } from '@angular/core';

import { SavedPage } from '../saved/saved';
import { NewJokePage } from '../new-joke/new-joke';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SavedPage;
  tab3Root = NewJokePage;

  constructor() {

  }
}
