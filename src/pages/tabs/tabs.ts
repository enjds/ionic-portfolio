import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'PostCreatePage';
  tab3Root = AboutPage;
  tab4Root = 'ProfilePage';

  constructor() {

  }
}
