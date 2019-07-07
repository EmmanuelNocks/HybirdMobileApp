import { Component } from '@angular/core';
import { WithdrawPage } from '../../transactions/withdraw/withdraw';
import { AccountReadPage } from '../../accounts/account-read/account-read';
import { DepositPage } from '../../transactions/deposit/deposit';
@Component({
  templateUrl: 'detailed-tab.html'
})
export class DetailedTabPage {

  Balance = AccountReadPage;
  Withdraw = WithdrawPage;
  Deposit = DepositPage;

  constructor() {

  }
}
