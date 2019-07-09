import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { WithdrawPage } from "./withdraw";
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
describe("WithdrawPage", () => {
  let de: DebugElement;
  let comp: WithdrawPage;
  let fixture: ComponentFixture<WithdrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawPage],
      imports: [IonicModule.forRoot(WithdrawPage)],
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
    fixture = TestBed.createComponent(WithdrawPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(comp instanceof WithdrawPage).toBe(true);
    expect(compiled.querySelector("ion-title").textContent).toContain(
      "Withdraw"
    );
  });
});
