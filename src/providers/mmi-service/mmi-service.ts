// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
Generated class for the MmiServiceProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class MmiServiceProvider {

authUrl:any='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y';
clientDomainUrl:any = 'https://momentum-retail-practical-test.firebaseio.com/';

constructor(public http: Http) {

}

public apiGet(endpoint){

return this.http.get(endpoint).map(this.getData).catch(this.handleErrorObservable);

}

public apiPost(body,endpoint) {

  
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(endpoint, JSON.stringify(body), options)
                  .map(this.getData)
                  .catch(this.handleErrorObservable);
  }

public apiPut(body,endpoint) {

  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
          
    return this.http.put(endpoint, JSON.stringify(body), options)
                      .map(this.getData)
                      .catch(this.handleErrorObservable);
      }

private getData(res: Response) {
   
  let body = res.json();
          return body || {};
      }

private handleErrorObservable (error: Response | any) {

    return Observable.throw(error.message || error);
      }
}