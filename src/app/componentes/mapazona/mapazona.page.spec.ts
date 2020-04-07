import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapazonaPage } from './mapazona.page';

describe('MapazonaPage', () => {
  let component: MapazonaPage;
  let fixture: ComponentFixture<MapazonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapazonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapazonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
