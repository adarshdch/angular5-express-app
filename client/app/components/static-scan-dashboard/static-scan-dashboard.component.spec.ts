import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticScanDashboardComponent } from './static-scan-dashboard.component';

describe('StaticScanDashboardComponent', () => {
  let component: StaticScanDashboardComponent;
  let fixture: ComponentFixture<StaticScanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticScanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticScanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
