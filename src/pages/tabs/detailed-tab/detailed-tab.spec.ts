import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { DetailedTabPage } from "./detailed-tab";
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
describe("DetailedTabPage", () => {
  let de: DebugElement;
  let comp: DetailedTabPage;
  let fixture: ComponentFixture<DetailedTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedTabPage],
      imports: [IonicModule.forRoot(DetailedTabPage)],
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
    fixture = TestBed.createComponent(DetailedTabPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof DetailedTabPage).toBe(true);
  });
});
