import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingTablePageComponent } from './betting-table-page.component';

describe('BettingTablePageComponent', () => {
  let component: BettingTablePageComponent;
  let fixture: ComponentFixture<BettingTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
