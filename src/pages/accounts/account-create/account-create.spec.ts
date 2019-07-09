import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { AccountCreatePage } from "./account-create";
import {
  IonicModule,
  NavController,
  DeepLinker,
  NavParams
} from "ionic-angular";
import { NavMock, DeepLinkerMock } from "../../../../test-config/mocks-ionic";
import { MmiServiceProvider } from "../../../providers/mmi-service/mmi-service";
import { MmiNotifyProvider } from "../../../providers/mmi-notify/mmi-notify";
import { Http } from "@angular/http";
describe("AccountCreatePage", () => {
  let de: DebugElement;
  let comp: AccountCreatePage;
  let fixture: ComponentFixture<AccountCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountCreatePage],
      imports: [IonicModule.forRoot(AccountCreatePage)],
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
    fixture = TestBed.createComponent(AccountCreatePage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof AccountCreatePage).toBe(true);
  });
});
