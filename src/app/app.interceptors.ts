import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler ,HttpEvent, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';



export class AppIntercepters implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    const token = localStorage.getItem('token');

    let copyReq;
    if(token){
      copyReq=req.clone({
        headers:new HttpHeaders({
         'Content-Type':  'application/json',
         'auth': token
        })
      })

    } else {
    copyReq = req.clone({
      headers:new HttpHeaders({
       'Content-Type':  'application/json'
      })
    });
  }



    return next.handle(copyReq)
    .pipe(
      map((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
          console.log('eventt',event)
        }
        return event;
      })
    );
  }

}
