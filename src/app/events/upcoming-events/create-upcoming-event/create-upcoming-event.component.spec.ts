import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpcomingEventComponent } from './create-upcoming-event.component';

describe('CreateUpcomingEventComponent', () => {
  let component: CreateUpcomingEventComponent;
  let fixture: ComponentFixture<CreateUpcomingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpcomingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpcomingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
