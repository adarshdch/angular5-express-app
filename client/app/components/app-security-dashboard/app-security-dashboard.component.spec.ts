import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecurityDashboardComponent } from './app-security-dashboard.component';

describe('AppSecurityDashboardComponent', () => {
  let component: AppSecurityDashboardComponent;
  let fixture: ComponentFixture<AppSecurityDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSecurityDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSecurityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
