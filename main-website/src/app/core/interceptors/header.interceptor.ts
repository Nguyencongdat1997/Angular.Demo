import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        'Ocp-Apim-Subscription-Key': environment.subscriptionKey,
      },
    });
    return next.handle(
      modifiedReq
    );
  }
}
