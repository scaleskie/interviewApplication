import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUpcomingEventComponent } from './delete-upcoming-event.component';

describe('DeleteUpcomingEventComponent', () => {
  let component: DeleteUpcomingEventComponent;
  let fixture: ComponentFixture<DeleteUpcomingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteUpcomingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUpcomingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
