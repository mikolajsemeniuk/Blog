import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToSqlserverComponent } from './connect-to-sqlserver.component';

describe('ConnectToSqlserverComponent', () => {
  let component: ConnectToSqlserverComponent;
  let fixture: ComponentFixture<ConnectToSqlserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectToSqlserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectToSqlserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
