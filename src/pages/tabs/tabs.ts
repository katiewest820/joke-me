import { Component } from '@angular/core';

import { SavedPage } from '../saved/saved';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SavedPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
