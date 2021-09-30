import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLibraryComponent } from './svg-library.component';

describe('SvgLibraryComponent', () => {
  let component: SvgLibraryComponent;
  let fixture: ComponentFixture<SvgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
