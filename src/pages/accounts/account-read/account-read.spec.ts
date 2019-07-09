import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { AccountReadPage } from "./account-read";
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
describe("AccountReadPage", () => {
  let de: DebugElement;
  let comp: AccountReadPage;
  let fixture: ComponentFixture<AccountReadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountReadPage],
      imports: [IonicModule.forRoot(AccountReadPage)],
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
    fixture = TestBed.createComponent(AccountReadPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof AccountReadPage).toBe(true);
  });
});
