import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { LoginPage } from "./login";
import {
  IonicModule,
  NavController,
  DeepLinker,
  NavParams
} from "ionic-angular";
import { NavMock, DeepLinkerMock } from "../../../test-config/mocks-ionic";
import { MmiServiceProvider } from "../../providers/mmi-service/mmi-service";
import { MmiNotifyProvider } from "../../providers/mmi-notify/mmi-notify";
import { Http } from "@angular/http";
import { By } from "@angular/platform-browser";

describe("Login Page", () => {
  let de: DebugElement;
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let emailElement: DebugElement;
  let passwordElement: DebugElement;
  let signInElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(LoginPage)],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock },
        { provide: NavParams, useClass: NavMock },
        { provide: MmiServiceProvider },
        { provide: MmiNotifyProvider },
        { provide: Http }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
    passwordElement = fixture.debugElement.query(By.css("ion-input[type=password]"));
    emailElement = fixture.debugElement.query(By.css("ion-input[type=email]"));
    signInElement = fixture.debugElement.query(By.css("button"));
  });

  it("should create component", () => {
    expect(comp instanceof LoginPage).toBe(true);

  });

  it("Entering email and password", () => {

    emailElement.nativeElement.value = 'rob@email.com';
    passwordElement.nativeElement.value = 'password';
    comp = fixture.componentInstance;
    signInElement.triggerEventHandler('click', null);
    expect(comp.data.email).toEqual('');
    expect(comp.data.password).toEqual('');
    expect(comp.data.returnSecureToken).toEqual(true);
    expect(typeof comp.login === "function").toBe(true);


  });
});
