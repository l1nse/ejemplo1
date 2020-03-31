import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AreabloqueComponent } from './areabloque.component';

describe('AreabloqueComponent', () => {
  let component: AreabloqueComponent;
  let fixture: ComponentFixture<AreabloqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreabloqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AreabloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
