import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { TabsPage } from "./tabs";
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
describe("TabsPage", () => {
  let de: DebugElement;
  let comp: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [IonicModule.forRoot(TabsPage)],
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
    fixture = TestBed.createComponent(TabsPage);
    comp = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(comp instanceof TabsPage).toBe(true);
  });
});
