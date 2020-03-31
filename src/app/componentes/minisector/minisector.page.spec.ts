import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinisectorPage } from './minisector.page';

describe('MinisectorPage', () => {
  let component: MinisectorPage;
  let fixture: ComponentFixture<MinisectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinisectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
