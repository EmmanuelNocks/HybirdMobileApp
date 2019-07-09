import { fakeAsync, async, TestBed, getTestBed, tick,inject } from  '@angular/core/testing';

// ...core testing imports
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
// ...http imports
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing'
import { MmiServiceProvider } from  './mmi-service';


describe('Service: MmiServiceProvider', () => {
    let backend: MockBackend;
    let service: MmiServiceProvider;
    let http :Http;
    let  injector: TestBed;
        // ...testing variables

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                providers: [
                    BaseRequestOptions,
                    MockBackend,
                    MmiServiceProvider,
                    {
                        deps: [
                            MockBackend,
                            BaseRequestOptions
                        ],
                        provide: Http,
                        useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                        }
                    }
                ]
            });
        }));

    // ...configureTestingModule
  
    const testbed = getTestBed();
    http = testbed.get(Http);
    backend = testbed.get(MockBackend);
    service = new MmiServiceProvider(http);


//     // ...beforeEach
function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (1) {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }


it('should Post ', () => {
    let requestBody ={
        email:"rob@email.com",
        password:"password",
        returnSecureToken: true
    }
    let responseBody ={
        "kind": "identitytoolkit#VerifyPasswordResponse",
        "localId": "UZyMgwSApiN0b148VDrZSAeWkfb2",
        "email": "bob@email.com",
        "displayName": "",
        "idToken": "aaikaIQXgpjgmMt2QwaNIquLfiP7NephhPQ. . .",
        "registered": true,
        "refreshToken": "AEu4IL34l6D5xNr . . .",
        "expiresIn": "3600"
}
       

        backend.connections.subscribe((connection: MockConnection) => {
            if (1) {
                const responseOptions = new ResponseOptions({body:responseBody,status: 200});
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
        tick();
        service.apiPost(requestBody,service.authUrl).subscribe((data) => {
            let res = JSON.parse(data);
             expect(res.email).toBe('bob@email.com');
            // expect(data[0].title).toBe('Pizza');
            // expect(data[1].title).toBe('Burrito');
            // expect(data[2].title).toBe('Cheeseburger');
        });
    });


    it('should log an error to the console on error', () => {
        setupConnections(backend, {
            body: { error: "I'm afraid I've got some bad news!" },
            status: 500
        });
        spyOn(console, 'error');

        service.apiGet(service.authUrl).subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith("I'm afraid I've got some bad news!");
        });
    });
});
