import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoulderzoneComponent } from './boulderzone.component';

describe('BoulderzoneComponent', () => {
  let component: BoulderzoneComponent;
  let fixture: ComponentFixture<BoulderzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoulderzoneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoulderzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
