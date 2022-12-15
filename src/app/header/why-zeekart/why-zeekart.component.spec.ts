import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyZeekartComponent } from './why-zeekart.component';

describe('WhyZeekartComponent', () => {
  let component: WhyZeekartComponent;
  let fixture: ComponentFixture<WhyZeekartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyZeekartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyZeekartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
