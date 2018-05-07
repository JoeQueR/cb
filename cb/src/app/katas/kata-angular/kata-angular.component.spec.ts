import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KataAngularComponent } from './kata-angular.component';

describe('KataAngularComponent', () => {
  let component: KataAngularComponent;
  let fixture: ComponentFixture<KataAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KataAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KataAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
