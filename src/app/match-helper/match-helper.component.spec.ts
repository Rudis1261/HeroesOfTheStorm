import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHelperComponent } from './match-helper.component';

describe('MatchHelperComponent', () => {
  let component: MatchHelperComponent;
  let fixture: ComponentFixture<MatchHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
