import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsTableComponent } from './upcoming-events-table.component';

describe('UpcomingEventsTableComponent', () => {
  let component: UpcomingEventsTableComponent;
  let fixture: ComponentFixture<UpcomingEventsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingEventsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingEventsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
