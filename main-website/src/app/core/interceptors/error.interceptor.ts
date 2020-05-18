import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, interval, of } from 'rxjs';
import { map, catchError, mergeMap, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                if (error.status !== 401) {
                    // 401 handled in auth.interceptor
                    this.toastr.error(error.message);
                }
                else{
                    // TODO: callback
                }
                return throwError(error);
            })
        );
    }
}
