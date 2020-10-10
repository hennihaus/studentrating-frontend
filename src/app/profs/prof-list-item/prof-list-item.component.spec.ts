import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfListItemComponent } from './prof-list-item.component';

describe('ProfListItemComponent', () => {
  let component: ProfListItemComponent;
  let fixture: ComponentFixture<ProfListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
