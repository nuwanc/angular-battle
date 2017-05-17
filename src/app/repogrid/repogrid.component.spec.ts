import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepogridComponent } from './repogrid.component';

describe('RepogridComponent', () => {
  let component: RepogridComponent;
  let fixture: ComponentFixture<RepogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepogridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
