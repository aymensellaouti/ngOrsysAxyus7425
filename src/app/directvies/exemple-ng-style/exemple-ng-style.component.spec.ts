import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgStyleComponent } from './exemple-ng-style.component';

describe('ExempleNgStyleComponent', () => {
  let component: ExempleNgStyleComponent;
  let fixture: ComponentFixture<ExempleNgStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleNgStyleComponent]
    });
    fixture = TestBed.createComponent(ExempleNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
