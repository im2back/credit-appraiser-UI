import { AuthInterceptor } from './auth.interceptor';
import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';



describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
