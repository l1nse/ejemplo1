import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrousPage } from './registrous.page';

describe('RegistrousPage', () => {
  let component: RegistrousPage;
  let fixture: ComponentFixture<RegistrousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
