import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { AccountsPage } from "./accounts";
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
describe("AccountsPage", () => {
  let de: DebugElement;
  let comp: AccountsPage;
  let fixture: ComponentFixture<AccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsPage],
      imports: [IonicModule.forRoot(AccountsPage)],
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
    fixture = TestBed.createComponent(AccountsPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof AccountsPage).toBe(true);
  });
});
