import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler ,HttpEvent} from '@angular/common/http';



export class AppIntercepters implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log(req);
    return next.handle(req);

  }

}
