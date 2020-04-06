import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZonasdebloquePage } from './zonasdebloque.page';

describe('ZonasdebloquePage', () => {
  let component: ZonasdebloquePage;
  let fixture: ComponentFixture<ZonasdebloquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasdebloquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZonasdebloquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
