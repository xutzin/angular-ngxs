import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { ShaMainComponent } from './main.dialog';

describe('ShaMainComponent', () => {
  let component: ShaMainComponent;
  let fixture: ComponentFixture<ShaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaMainComponent ],
      imports: [
        NgxsModule.forRoot(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
