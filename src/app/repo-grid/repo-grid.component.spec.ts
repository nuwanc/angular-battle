import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoGridComponent } from './repo-grid.component';

describe('RepogridComponent', () => {
  let component: RepoGridComponent;
  let fixture: ComponentFixture<RepoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
