import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCadastroComponent } from './client-cadastro.component';

describe('ClientCadastroComponent', () => {
  let component: ClientCadastroComponent;
  let fixture: ComponentFixture<ClientCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
