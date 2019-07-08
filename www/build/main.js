webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_tabs__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, mmi_request, notify) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.data = {
            email: "",
            password: "",
            returnSecureToken: true
        };
    }
    LoginPage.prototype.handleAuthenticationError = function (error) {
        this.notify.dismissLoading();
        var msg = error.status != 0 ? JSON.parse(error._body).error.message : 'Connection problem';
        this.notify.presentToast(msg);
    };
    LoginPage.prototype.setUserSession = function (token, localId) {
        window.sessionStorage.setItem('idToken', token);
        window.sessionStorage.setItem('localId', localId);
    };
    LoginPage.prototype.getResponse = function (response) {
        if (response) {
            this.setUserSession(response.idToken, response.localId);
            this.notify.dismissLoading();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs_tabs__["a" /* TabsPage */]);
        }
        else {
            this.notify.dismissLoading();
            this.notify.presentToast("Error while trying to login");
        }
    };
    LoginPage.prototype.sendRequest = function (body) {
        var _this = this;
        this.notify.presentLoading('Authenticating...');
        this.mmi_request.apiPost(body, this.mmi_request.authUrl).subscribe(function (response) {
            _this.getResponse(response);
        }, function (error) {
            _this.handleAuthenticationError(error);
        });
    };
    LoginPage.prototype.validateInputUser = function () {
        try {
            if (this.data.email && this.data.password) {
                this.sendRequest(this.data);
            }
            else {
                this.notify.presentToast("All fields are required");
            }
        }
        catch (error) {
        }
    };
    LoginPage.prototype.login = function () {
        this.validateInputUser();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input required [(ngModel)]="data.email" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input required [(ngModel)]="data.password" type="password"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  \n  <div padding>\n    <button ion-button (click)="login()" block>Sign In</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_detailed_tab_detailed_tab__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccountsPage page.
 *https://momentum-retail-practical-test.firebaseio.com/clients/<localId_from_login_response>.json?auth=<idToken_from_login_response>
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = /** @class */ (function () {
    function AccountsPage(app, navCtrl, navParams, mmi_request, notify) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.clientData = { accounts: [], age: 0, name: '' };
    }
    // using this since the constructor of tabs get called once
    AccountsPage.prototype.ionViewWillEnter = function () {
        this.fullEndpoint = this.mmi_request.clientDomainUrl + 'clients/' + window.sessionStorage.getItem('localId') + '.json?auth=' + window.sessionStorage.getItem('idToken');
        this.getClientData();
    };
    AccountsPage.prototype.getResponse = function (response) {
        if (response) {
            this.clientData = response;
        }
        else {
            this.notify.presentAlert('Accounts Error', 'Could not get the accounts');
        }
    };
    AccountsPage.prototype.sendRequest = function () {
        var _this = this;
        this.mmi_request.apiGet(this.fullEndpoint).subscribe(function (response) {
            _this.getResponse(response);
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not get the accounts');
        });
    };
    AccountsPage.prototype.getClientData = function () {
        try {
            this.sendRequest();
        }
        catch (error) {
            this.notify.presentAlert('Accounts Error', error);
        }
    };
    AccountsPage.prototype.accountSelected = function (acc) {
        window.sessionStorage.setItem('currectAccount', acc);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_detailed_tab_detailed_tab__["a" /* DetailedTabPage */]);
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-accounts',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/accounts/accounts.html"*/'<!--\n  Generated template for the AccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Accounts</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-card>\n    <ion-card-header>\n      Name: {{clientData?.name}} | Age: {{clientData?.age}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <button ion-item *ngFor="let account of clientData?.accounts" (click)="accountSelected(account)">\n          {{ account }}\n          <ion-icon name="arrow-dropright" item-end></ion-icon>\n        </button>  \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactions_withdraw_withdraw__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_account_read_account_read__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transactions_deposit_deposit__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailedTabPage = /** @class */ (function () {
    function DetailedTabPage() {
        this.Balance = __WEBPACK_IMPORTED_MODULE_2__accounts_account_read_account_read__["a" /* AccountReadPage */];
        this.Withdraw = __WEBPACK_IMPORTED_MODULE_1__transactions_withdraw_withdraw__["a" /* WithdrawPage */];
        this.Deposit = __WEBPACK_IMPORTED_MODULE_3__transactions_deposit_deposit__["a" /* DepositPage */];
    }
    DetailedTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/tabs/detailed-tab/detailed-tab.html"*/'<ion-tabs>\n    <ion-tab [root]="Balance" tabTitle="Balance"></ion-tab>\n    <ion-tab [root]="Withdraw" tabTitle="Withdraw" ></ion-tab>\n    <ion-tab [root]="Deposit" tabTitle="Deposit" ></ion-tab>\n</ion-tabs>\n  '/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/tabs/detailed-tab/detailed-tab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DetailedTabPage);
    return DetailedTabPage;
}());

//# sourceMappingURL=detailed-tab.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_tabs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(app, navCtrl, navParams, mmi_request, notify) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.accountData = { balance: 0, overdraft: 0 };
    }
    // using this since the constructor of tabs get called once
    WithdrawPage.prototype.ionViewWillEnter = function () {
        this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
        this.fullEndpoint = this.mmi_request.clientDomainUrl + 'accounts/' + this.accountNum + '.json?auth=' + window.sessionStorage.getItem('idToken');
        this.getAccounts(this.accountNum);
    };
    WithdrawPage.prototype.getAccounts = function (account) {
        this.sendGetRequest();
    };
    WithdrawPage.prototype.setAccountData = function (data) {
        this.accountData = data;
    };
    WithdrawPage.prototype.sendGetRequest = function () {
        var _this = this;
        this.mmi_request.apiGet(this.fullEndpoint).subscribe(function (data) {
            _this.setAccountData(data);
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not get the accounts');
        });
    };
    WithdrawPage.prototype.sendPutRequest = function (body) {
        var _this = this;
        this.mmi_request.apiPut(body, this.fullEndpoint).subscribe(function (data) {
            _this.amount = null;
            _this.notify.presentAlert('Withdraw', 'Successful Withdrawn!');
        }, function (error) {
            _this.notify.presentAlert('Withdraw Error', 'an error has occurred ');
        });
    };
    WithdrawPage.prototype.calculateBalanceAndSetTotalAmount = function () {
        var total = Number(this.accountData.balance) - Number(this.amount);
        this.accountData.balance = total;
    };
    WithdrawPage.prototype.calculateOverdraftAndSetTotalAmount = function () {
        var total = Number(this.accountData.overdraft) - Number(this.amount);
        this.accountData.overdraft = total;
    };
    WithdrawPage.prototype.isAmountValid = function () {
        if (this.amount > 0) {
            return true;
        }
        else {
            this.notify.presentAlert('Withdraw', 'Cannot withdraw  ' + 'R' + this.accountData.balance);
            return false;
        }
    };
    WithdrawPage.prototype.areYouEntitledToWithdrawOverdraft = function () {
        if ((Number(this.accountData.overdraft) - Number(this.amount)) >= 0) {
            return true;
        }
        else {
            this.notify.presentAlert('Withdraw Overdraft', 'You are entitled to withdraw ' + 'R' + this.accountData.balance);
            return false;
        }
    };
    WithdrawPage.prototype.areYouEntitledToWithdrawBalance = function () {
        if ((Number(this.accountData.balance) - Number(this.amount)) >= 0) {
            return true;
        }
        else {
            this.notify.presentAlert('Withdraw Balance', 'You are entitled to withdraw ' + 'R' + this.accountData.balance);
            return false;
        }
    };
    WithdrawPage.prototype.withdraw = function (body) {
        this.sendPutRequest(body);
    };
    WithdrawPage.prototype.getCash = function (isoverdraft) {
        if (this.isAmountValid()) {
            if (isoverdraft && this.areYouEntitledToWithdrawOverdraft()) {
                this.calculateOverdraftAndSetTotalAmount();
                this.withdraw(this.accountData);
            }
            else if (this.areYouEntitledToWithdrawBalance()) {
                this.calculateBalanceAndSetTotalAmount();
                this.withdraw(this.accountData);
            }
        }
    };
    WithdrawPage.prototype.GotoMain = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs_tabs__["a" /* TabsPage */]);
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/transactions/withdraw/withdraw.html"*/'<!--\n  Generated template for the WithdrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Withdraw</ion-title>\n    <ion-buttons end>\n        <button ion-button button-right (click)="GotoMain()" >\n            back\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      \n        <ion-card-content>\n            <ion-list>\n  \n                <ion-item>\n                  <ion-label floating>Amount.</ion-label>\n                  <ion-input  required [(ngModel)]="amount" type="number"></ion-input>\n                </ion-item>\n          \n                <ion-item>\n                    <ion-label>Would you like to use overdraft amount ?</ion-label>\n                    <ion-checkbox name="isoverdraft" [(ngModel)]= "isoverdraft" color="dark" checked="false"></ion-checkbox>\n                  </ion-item>\n              </ion-list>\n              <div padding>\n                  <button ion-button (click)="getCash(isoverdraft)" block>Withdraw</button>\n                </div>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/transactions/withdraw/withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountReadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_tabs__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccountReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountReadPage = /** @class */ (function () {
    function AccountReadPage(app, navCtrl, navParams, mmi_request, notify) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.accountDetail = { balance: 0, overdraft: 0 };
    }
    // using this since the constructor of tabs get called once
    AccountReadPage.prototype.ionViewWillEnter = function () {
        this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
        this.fullEndpoint = this.mmi_request.clientDomainUrl + 'accounts/' + this.accountNum + '.json?auth=' + window.sessionStorage.getItem('idToken');
        this.getAccountDetail();
    };
    AccountReadPage.prototype.getResponse = function (response) {
        if (response) {
            this.accountDetail = response;
        }
        else {
            this.notify.presentAlert('Accounts Error', 'Could not get the details');
        }
    };
    AccountReadPage.prototype.sendRequest = function () {
        var _this = this;
        this.mmi_request.apiGet(this.fullEndpoint).subscribe(function (response) {
            _this.getResponse(response);
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not get the details');
        });
    };
    AccountReadPage.prototype.getAccountDetail = function () {
        try {
            this.sendRequest();
        }
        catch (error) {
            this.notify.presentAlert('Accounts Error', error);
        }
    };
    AccountReadPage.prototype.GotoMain = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs_tabs__["a" /* TabsPage */]);
    };
    AccountReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account-read',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/account-read/account-read.html"*/'<!--\n  Generated template for the AccountReadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n    <ion-buttons end>\n        <button ion-button button-right (click)="GotoMain()" >\n            back\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Account No: {{accountNum}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>Balance :</ion-col>\n          <ion-col col-8>{{accountDetail?.balance}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>Overdraft :</ion-col>\n          <ion-col col-6>{{accountDetail?.overdraft}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/account-read/account-read.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]])
    ], AccountReadPage);
    return AccountReadPage;
}());

//# sourceMappingURL=account-read.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_tabs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepositPage = /** @class */ (function () {
    function DepositPage(app, navCtrl, navParams, mmi_request, notify) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.accountData = { balance: 0, overdraft: 0 };
    }
    // using this since the constructor of tabs get called once
    DepositPage.prototype.ionViewWillEnter = function () {
        this.accountNum = parseInt(window.sessionStorage.getItem('currectAccount'));
        this.fullEndpoint = this.mmi_request.clientDomainUrl + 'accounts/' + this.accountNum + '.json?auth=' + window.sessionStorage.getItem('idToken');
        this.getAccounts();
    };
    DepositPage.prototype.setAccountData = function (data) {
        this.accountData = data;
    };
    DepositPage.prototype.sendGetRequest = function () {
        var _this = this;
        this.mmi_request.apiGet(this.fullEndpoint).subscribe(function (data) {
            _this.setAccountData(data);
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not get the accounts');
        });
    };
    DepositPage.prototype.sendPutRequest = function (body) {
        var _this = this;
        this.mmi_request.apiPut(body, this.fullEndpoint).subscribe(function (data) {
            _this.amount = null;
            _this.notify.presentAlert('Deposit', 'Successful Saved!');
        }, function (error) {
            _this.notify.presentAlert('Deposit', 'Error occured!');
        });
    };
    DepositPage.prototype.isAmountValid = function () {
        if (this.amount > 0) {
            return true;
        }
        else {
            this.notify.presentAlert('Deposit', 'Invalid Amount');
            return false;
        }
    };
    DepositPage.prototype.calculateAndSetTotalAmount = function () {
        var total = Number(this.amount) + Number(this.accountData.balance);
        this.accountData.balance = total;
    };
    DepositPage.prototype.getAccounts = function () {
        try {
            this.sendGetRequest();
        }
        catch (error) {
            this.notify.presentAlert('Accounts Error', error);
        }
    };
    DepositPage.prototype.GotoMain = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs_tabs__["a" /* TabsPage */]);
    };
    DepositPage.prototype.deposit = function () {
        try {
            if (this.isAmountValid()) {
                this.calculateAndSetTotalAmount();
                this.sendPutRequest(this.accountData);
            }
        }
        catch (error) {
            this.notify.presentAlert('Accounts Error', error);
        }
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-deposit',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/transactions/deposit/deposit.html"*/'<!--\n  Generated template for the DepositPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Deposit</ion-title>\n    <ion-buttons end>\n        <button ion-button button-right (click)="GotoMain()">\n            back\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      \n        <ion-card-content>\n            <ion-list>\n  \n                <ion-item>\n                  <ion-label floating>Amount.</ion-label>\n                  <ion-input required [(ngModel)]="amount" type="number"></ion-input>\n                </ion-item>\n          \n              \n              </ion-list>\n              <div padding>\n                  <button ion-button (click)="deposit()" block>Save</button>\n                </div>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/transactions/deposit/deposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountCreatePage = /** @class */ (function () {
    function AccountCreatePage(navCtrl, navParams, mmi_request, notify, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mmi_request = mmi_request;
        this.notify = notify;
        this.alertCtrl = alertCtrl;
        this.clientData = { accounts: [], age: 0, name: '' }; // giving default values if it happens that json structure changes from api
        this.accountData = { balance: 0, overdraft: 0 };
    }
    // using this since the constructor of tabs get called once
    AccountCreatePage.prototype.ionViewWillEnter = function () {
        this.accountNum = Math.floor(1000000 + Math.random() * 900000);
        this.fullEndpoint = this.mmi_request.clientDomainUrl + 'clients/' + window.sessionStorage.getItem('localId') + '.json?auth=' + window.sessionStorage.getItem('idToken');
        this.getClientData();
    };
    AccountCreatePage.prototype.isvalidateAccount = function () {
        if (this.accountNum > 0) {
            return true;
        }
        else {
            this.notify.presentAlert('Accounts ', 'Cannot be negative number or empty');
            return false;
        }
    };
    AccountCreatePage.prototype.pushAccountTolist = function () {
        this.clientData.accounts.push(parseFloat(this.accountNum));
    };
    AccountCreatePage.prototype.getClientDataASBody = function () {
        return this.clientData;
    };
    AccountCreatePage.prototype.sendRequest = function (body) {
        var _this = this;
        this.mmi_request.apiPut(body, this.fullEndpoint).subscribe(function (data) {
            _this.accountNum = null;
            _this.notify.presentAlert('Account', 'Successful Saved!');
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not save');
        });
    };
    AccountCreatePage.prototype.saveNewAcc = function () {
        if (this.isvalidateAccount()) {
            this.pushAccountTolist();
            this.sendRequest(this.getClientDataASBody());
        }
    };
    AccountCreatePage.prototype.getClientData = function () {
        var _this = this;
        this.mmi_request.apiGet(this.fullEndpoint).subscribe(function (data) {
            _this.clientData = data;
        }, function (error) {
            _this.notify.presentAlert('Accounts Error', 'Could not fetch accounts');
        });
    };
    AccountCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account-create',template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/account-create/account-create.html"*/'<!--\n  Generated template for the AccountCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>New Account </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content padding>\n\n    <ion-card>\n      \n        <ion-card-content>\n            <ion-list>\n  \n                <ion-item>\n                  <ion-label floating>Account No.</ion-label>\n                  <ion-input   [(ngModel)]="accountNum" type="number"></ion-input>\n                </ion-item>\n          \n              \n              </ion-list>\n              <div padding>\n                  <button ion-button (click)="saveNewAcc()" block>Save</button>\n                </div>\n        </ion-card-content>\n      </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/accounts/account-create/account-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccountCreatePage);
    return AccountCreatePage;
}());

//# sourceMappingURL=account-create.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs_tabs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_mmi_service_mmi_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_mmi_notify_mmi_notify__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_accounts_accounts_accounts__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accounts_account_read_account_read__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_accounts_account_create_account_create__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_transactions_withdraw_withdraw__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transactions_deposit_deposit__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_detailed_tab_detailed_tab__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_accounts_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accounts_account_read_account_read__["a" /* AccountReadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_accounts_account_create_account_create__["a" /* AccountCreatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_transactions_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_detailed_tab_detailed_tab__["a" /* DetailedTabPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_accounts_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accounts_account_read_account_read__["a" /* AccountReadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_accounts_account_create_account_create__["a" /* AccountCreatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_transactions_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_detailed_tab_detailed_tab__["a" /* DetailedTabPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_mmi_service_mmi_service__["a" /* MmiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_mmi_notify_mmi_notify__["a" /* MmiNotifyProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';






/*
Generated class for the MmiServiceProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var MmiServiceProvider = /** @class */ (function () {
    function MmiServiceProvider(http) {
        this.http = http;
        this.authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y';
        this.clientDomainUrl = 'https://momentum-retail-practical-test.firebaseio.com/';
    }
    MmiServiceProvider.prototype.apiGet = function (endpoint) {
        return this.http.get(endpoint).map(this.getData).catch(this.handleErrorObservable);
    };
    MmiServiceProvider.prototype.apiPost = function (body, endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(endpoint, JSON.stringify(body), options)
            .map(this.getData)
            .catch(this.handleErrorObservable);
    };
    MmiServiceProvider.prototype.apiPut = function (body, endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(endpoint, JSON.stringify(body), options)
            .map(this.getData)
            .catch(this.handleErrorObservable);
    };
    MmiServiceProvider.prototype.getData = function (res) {
        var body = res.json();
        return body || {};
    };
    MmiServiceProvider.prototype.handleErrorObservable = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    MmiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MmiServiceProvider);
    return MmiServiceProvider;
}());

//# sourceMappingURL=mmi-service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MmiNotifyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
Note : i am taking advantange of a provider to have  alerts and toasts and loaders into one file
  
Generated class for the MmiNotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MmiNotifyProvider = /** @class */ (function () {
    function MmiNotifyProvider(loaderCtrl, ToastCtrl, alertCtrl) {
        this.loaderCtrl = loaderCtrl;
        this.ToastCtrl = ToastCtrl;
        this.alertCtrl = alertCtrl;
    }
    MmiNotifyProvider.prototype.loaderCtr = function (msg) {
        this.loader = this.loaderCtrl.create({ content: msg });
    };
    MmiNotifyProvider.prototype.toastCtr = function (msg) {
        this.toast = this.ToastCtrl.create({ message: msg, duration: 3000, position: "middle" });
    };
    MmiNotifyProvider.prototype.alertCtr = function (title, msg) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [{
                    text: 'OK'
                }]
        });
    };
    MmiNotifyProvider.prototype.presentLoading = function (msg) {
        this.loaderCtr(msg);
        this.loader.present();
    };
    MmiNotifyProvider.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    MmiNotifyProvider.prototype.presentToast = function (msg) {
        this.toastCtr(msg);
        this.toast.present();
    };
    MmiNotifyProvider.prototype.presentAlert = function (title, msg) {
        this.alertCtr(title, msg);
        this.alert.present();
    };
    MmiNotifyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MmiNotifyProvider);
    return MmiNotifyProvider;
}());

//# sourceMappingURL=mmi-notify.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accounts_accounts_accounts__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_account_create_account_create__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__accounts_accounts_accounts__["a" /* AccountsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__accounts_account_create_account_create__["a" /* AccountCreatePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/tabs/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Accounts" tabIcon="card"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="New Account" tabIcon="create"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/home/emmanuel.mulea/Desktop/HybirdMobileApp/src/pages/tabs/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map