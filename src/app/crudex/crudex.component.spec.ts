import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudexComponent } from './crudex.component';

describe('CrudexComponent', () => {
  let component: CrudexComponent;
  let fixture: ComponentFixture<CrudexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
