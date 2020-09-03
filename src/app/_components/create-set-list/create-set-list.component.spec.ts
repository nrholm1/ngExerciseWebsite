import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetListComponent } from './create-set-list.component';

describe('CreateSetListComponent', () => {
  let component: CreateSetListComponent;
  let fixture: ComponentFixture<CreateSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
