import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { DepositPage } from "./deposit";
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
describe("DepositPage", () => {
  let de: DebugElement;
  let comp: DepositPage;
  let fixture: ComponentFixture<DepositPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositPage],
      imports: [IonicModule.forRoot(DepositPage)],
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
    fixture = TestBed.createComponent(DepositPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof DepositPage).toBe(true);
  });
});
