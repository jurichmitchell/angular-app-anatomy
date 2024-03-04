import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordArtComponent } from './word-art.component';

describe('WordArtComponent', () => {
  let component: WordArtComponent;
  let fixture: ComponentFixture<WordArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
