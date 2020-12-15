import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsDetailsComponent } from './tenants-details.component';

describe('TenantsDetailsComponent', () => {
  let component: TenantsDetailsComponent;
  let fixture: ComponentFixture<TenantsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
