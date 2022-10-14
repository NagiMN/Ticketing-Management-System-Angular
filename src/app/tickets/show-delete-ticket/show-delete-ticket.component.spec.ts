import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteTicketComponent } from './show-delete-ticket.component';

describe('ShowDeleteTicketComponent', () => {
  let component: ShowDeleteTicketComponent;
  let fixture: ComponentFixture<ShowDeleteTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDeleteTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
