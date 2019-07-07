import { Component } from '@angular/core';
import { AccountsPage } from '../../accounts/accounts/accounts';
import { AccountCreatePage } from '../../accounts/account-create/account-create';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountsPage;
  tab2Root = AccountCreatePage;


  constructor() {

  }
}
